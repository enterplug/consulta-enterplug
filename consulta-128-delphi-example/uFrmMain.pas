{================================ Enter&Plug Sistemas ==========================================
Sistema         : Consulta WebService - Serasa
Autor           : André Luis Maglio Cunha
Data Criação    : 11/07/2016
================================================================================================}

unit uFrmMain;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, 
  Vcl.Graphics, Vcl.Controls, Vcl.Forms, Vcl.Dialogs, IdBaseComponent, IdComponent,
  IdTCPConnection, IdTCPClient, IdHTTP, Vcl.StdCtrls, Vcl.Buttons, IdAntiFreezeBase, 
  Vcl.IdAntiFreeze, IdAuthentication, Vcl.ExtCtrls, StrUtils, Vcl.ComCtrls, DBXJSON,
  System.JSON, Data.DB, Datasnap.DBClient, Xml.xmldom, Datasnap.Provider,
  Datasnap.Xmlxform, Xml.XMLIntf, Xml.XMLDoc;

type
  TfrmMain = class(TForm)
    pcWebService: TPageControl;
    tabConsulta: TTabSheet;
    tclie: TTabSheet;
    Label1: TLabel;
    Label2: TLabel;
    btnConsultar: TBitBtn;
    txtUrl: TEdit;
    memoConsulta: TMemo;
    groupParametrosEntrada: TGroupBox;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    Label6: TLabel;
    txtCPF_CNPJ: TEdit;
    txtEmail: TEdit;
    txtSenha: TEdit;
    txtCodigoProduto: TEdit;
    rgTipoDocumento: TRadioGroup;
    IdAntiFreeze: TIdAntiFreeze;
    IdHTTP: TIdHTTP;
    btnTratarResultado: TBitBtn;
    memoResultado: TMemo;
    btnTratarResultadoXML: TBitBtn;
    rgTipoArquivo: TRadioGroup;
    procedure btnConsultarClick(Sender: TObject);
    procedure btnTratarResultadoClick(Sender: TObject);
    procedure btnTratarResultadoXMLClick(Sender: TObject);
  private


  public

    // Método que realiza a consulta
    procedure consultar(url, email, senha, codigoProduto, documento: String; tipoDocumento, tipoArquivo: Integer);

    function getTextoTag(myText, tagInicial, tagFinal: String): String;

  end;

var
  frmMain: TfrmMain;

implementation

{$R *.dfm}

procedure TfrmMain.btnConsultarClick(Sender: TObject);
begin
  // Chamada do método com os respectivos parametros
  consultar(txtUrl.Text, txtEmail.Text, txtSenha.Text, txtCodigoProduto.Text, txtCPF_CNPJ.Text, rgTipoDocumento.ItemIndex, rgTipoArquivo.ItemIndex);
end;

procedure TfrmMain.btnTratarResultadoClick(Sender: TObject);
var
  i: integer;

  jsonObj: TJSONObject;

  jsonObjData,
  jp: TJSONPair;

  vJSONScenarioEntry: TJSONValue;

begin
  memoResultado.Lines.Clear;

  try
  begin
    jsonObj  := TJSONObject.ParseJSONValue(TEncoding.ASCII.GetBytes(memoConsulta.Lines.Text), 0) as TJSONObject;

    // Exibo a quantidade de pares do objeto
    memoResultado.Lines.Add('quantidade de pares ' + IntToStr(jsonObj.Size));
    memoResultado.Lines.Add('');

    // Percorrendo o arquivo para exibir todo o seu conteudo
    for i := 0 to jsonObj.Size - 1 do
    begin
      jp := jsonObj.Get(i);

      memoResultado.Lines.Add(jp.JsonString.ToString + ' : ' + jp.JsonValue.ToString);
    end;

    memoResultado.Lines.Add('');
    memoResultado.Lines.Add('');
    memoResultado.Lines.Add('Procurar por um objeto especifico');

    jsonObjData   := TJSONPair.Create;

    // Procurar por um objeto especifico
    jsonObjData           := jsonObj.Get('data');
    vJSONScenarioEntry    := jsonObjData.JsonValue;

    memoResultado.Lines.Add('Data: ' + vJSONScenarioEntry.Value);
  end;
  finally
    FreeAndNil(jsonObj);
  end;
end;

procedure TfrmMain.btnTratarResultadoXMLClick(Sender: TObject);
begin
  memoResultado.Lines.Add('CPF Região Origem: ' + getTextoTag(memoConsulta.Lines.Text, '<regiaoOrigem>', '</regiaoOrigem>'));
  memoResultado.Lines.Add('CPF Número: ' + getTextoTag(memoConsulta.Lines.Text, '<numero>', '</numero>'));
  memoResultado.Lines.Add('Endereço rua: ' + getTextoTag(memoConsulta.Lines.Text, '<logradouro>', '</logradouro>'));
  memoResultado.Lines.Add('Possui restrição: ' + getTextoTag(memoConsulta.Lines.Text, '<restricao>', '</restricao>'));
end;

procedure TfrmMain.consultar(url, email, senha, codigoProduto, documento: String; tipoDocumento, tipoArquivo: Integer);
var
  sConsulta,
  sResultado: String;

begin
  try
  begin
    // Montando a string de consulta
    sConsulta := url + 
                 'email=' + email + 
                 '&senha=' + senha +
                 '&codigoProduto=' + codigoProduto +
                 '&tipoConsumidor=' + IfThen(tipoDocumento = 0, 'F', 'T') +
                 '&documentoConsumidor=' + documento; 
    
    // Passando a "Authorization" para o componente
    IdHTTP.Request.CustomHeaders.AddValue('Authorization', 'Basic ZW50ZXJwbHVnOnBsdWdlbnRlcg==');
    IdHTTP.Request.CustomHeaders.AddValue('Cache-control', 'no-cache');

    // Verifico o tipo de arquivo solicitado para o retorno (0 = JSON, 1 = XML)
    if tipoArquivo = 0 then
    begin
      IdHTTP.Request.CustomHeaders.AddValue('Accept', 'application/JSON');
      IdHTTP.Request.CustomHeaders.AddValue('Content-Type', 'application/JSON');
    end
    else
    if tipoArquivo = 1 then
    begin
      IdHTTP.Request.CustomHeaders.AddValue('Accept', 'application/xml');
      IdHTTP.Request.CustomHeaders.AddValue('Content-Type', 'application/xml');
    end;

    // Baixando o arquivo
    sResultado := IdHTTP.Get(sConsulta);

    // Exibindo o resultado no memo
    memoConsulta.Lines.Add(sResultado);
  end;
  except
    on E : Exception do
      raise Exception.Create('Não foi possível realizar a consulta, motivo: ' + e.Message);
  end;
end;

function TfrmMain.getTextoTag(myText, tagInicial, tagFinal: String): String;
var
  iAux,
  gAux : Integer;

begin
  Result := '';

  if (Pos(tagFinal, myText) <> 0) and (Pos(tagInicial, myText) <> 0) then
  begin
    iAux := Pos(tagInicial, myText) + Length(tagInicial);
    gAux := Pos(tagFinal, myText);
    Result := Copy(myText, iAux, gAux - iAux);
  end;
end;

end.
