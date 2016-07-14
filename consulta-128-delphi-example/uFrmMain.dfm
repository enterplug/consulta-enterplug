object frmMain: TfrmMain
  Left = 0
  Top = 0
  Caption = 'Exemplo - Consulta WebService'
  ClientHeight = 542
  ClientWidth = 934
  Color = clBtnFace
  Constraints.MinHeight = 580
  Constraints.MinWidth = 950
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poScreenCenter
  PixelsPerInch = 96
  TextHeight = 13
  object pcWebService: TPageControl
    Left = 0
    Top = 0
    Width = 934
    Height = 542
    ActivePage = tabConsulta
    Align = alClient
    TabOrder = 0
    object tabConsulta: TTabSheet
      Caption = 'Consulta'
      DesignSize = (
        926
        514)
      object Label1: TLabel
        Left = 5
        Top = 5
        Width = 64
        Height = 13
        Caption = 'URL Consulta'
      end
      object Label2: TLabel
        Left = 5
        Top = 213
        Width = 77
        Height = 13
        Caption = 'Resultado Bruto'
      end
      object btnConsultar: TBitBtn
        Left = 325
        Top = 182
        Width = 145
        Height = 25
        Caption = 'Consultar'
        TabOrder = 0
        OnClick = btnConsultarClick
      end
      object txtUrl: TEdit
        Left = 5
        Top = 24
        Width = 465
        Height = 21
        TabOrder = 1
        Text = 'http://186.249.34.34/consulta/?'
      end
      object memoConsulta: TMemo
        Left = 5
        Top = 229
        Width = 915
        Height = 279
        Anchors = [akLeft, akTop, akRight, akBottom]
        Color = clWhite
        ReadOnly = True
        ScrollBars = ssBoth
        TabOrder = 2
      end
      object groupParametrosEntrada: TGroupBox
        Left = 5
        Top = 51
        Width = 465
        Height = 113
        Caption = 'Parametros de Entrada'
        TabOrder = 3
        object Label3: TLabel
          Left = 295
          Top = 63
          Width = 54
          Height = 13
          Caption = 'CPF / CNPJ'
        end
        object Label4: TLabel
          Left = 10
          Top = 19
          Width = 24
          Height = 13
          Caption = 'Email'
        end
        object Label5: TLabel
          Left = 10
          Top = 62
          Width = 30
          Height = 13
          Caption = 'Senha'
        end
        object Label6: TLabel
          Left = 151
          Top = 63
          Width = 89
          Height = 13
          Caption = 'C'#243'digo do Produto'
        end
        object txtCPF_CNPJ: TEdit
          Left = 295
          Top = 79
          Width = 159
          Height = 21
          TabOrder = 0
          Text = '42924057191'
        end
        object txtEmail: TEdit
          Left = 10
          Top = 35
          Width = 279
          Height = 21
          TabOrder = 1
          Text = 'consulta@enterplug.com.br'
        end
        object txtSenha: TEdit
          Left = 10
          Top = 79
          Width = 135
          Height = 21
          PasswordChar = '*'
          TabOrder = 2
          Text = 'consulta'
        end
        object txtCodigoProduto: TEdit
          Left = 151
          Top = 79
          Width = 138
          Height = 21
          TabOrder = 3
          Text = '128'
        end
        object rgTipoDocumento: TRadioGroup
          Left = 295
          Top = 19
          Width = 159
          Height = 37
          Caption = 'Tipo de Documento'
          Columns = 2
          ItemIndex = 0
          Items.Strings = (
            'CPF'
            'CNPJ')
          TabOrder = 4
        end
      end
      object rgTipoArquivo: TRadioGroup
        Left = 5
        Top = 170
        Width = 159
        Height = 37
        Caption = 'Tipo de arquivo retornado'
        Columns = 2
        Enabled = False
        ItemIndex = 1
        Items.Strings = (
          'JSON'
          'XML')
        TabOrder = 4
      end
    end
    object tclie: TTabSheet
      Caption = 'Resultado Tratado'
      ImageIndex = 1
      DesignSize = (
        926
        514)
      object btnTratarResultado: TBitBtn
        Left = 5
        Top = 5
        Width = 164
        Height = 25
        Caption = 'Tratar Resultado JSON'
        Enabled = False
        TabOrder = 0
        OnClick = btnTratarResultadoClick
      end
      object memoResultado: TMemo
        Left = 5
        Top = 67
        Width = 915
        Height = 441
        Anchors = [akLeft, akTop, akRight, akBottom]
        ScrollBars = ssBoth
        TabOrder = 1
      end
      object btnTratarResultadoXML: TBitBtn
        Left = 5
        Top = 36
        Width = 164
        Height = 25
        Caption = 'TratarResultado XML'
        TabOrder = 2
        OnClick = btnTratarResultadoXMLClick
      end
    end
  end
  object IdAntiFreeze: TIdAntiFreeze
    Left = 96
    Top = 272
  end
  object IdHTTP: TIdHTTP
    AllowCookies = True
    ProxyParams.BasicAuthentication = False
    ProxyParams.ProxyPort = 0
    Request.ContentLength = -1
    Request.ContentRangeEnd = -1
    Request.ContentRangeStart = -1
    Request.ContentRangeInstanceLength = -1
    Request.Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    Request.BasicAuthentication = False
    Request.UserAgent = 'Mozilla/3.0 (compatible; Indy Library)'
    Request.Ranges.Units = 'bytes'
    Request.Ranges = <>
    HTTPOptions = [hoForceEncodeParams]
    Left = 32
    Top = 272
  end
end
