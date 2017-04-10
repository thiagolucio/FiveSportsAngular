import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("../../node_modules/animate.css/animate.min.css")',
  'fontFace': {
    'fontFamily': ''Impact'',
    'src': 'url('../fonts/impact-webfont.eot')',
    'src': 'url('../fonts/impact-webfont.eot?#iefix') format('embedded-opentype'),
         url('../fonts/impact-webfont.woff') format('woff'),
         url('../fonts/impact-webfont.ttf') format('truetype'),
         url('../fonts/impact-webfont.svg#Impact') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'fontImpact': {
    'fontFamily': ''Impact', Arial Black, "sans serif"',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'h1': {
    'fontFamily': ''Impact', Arial Black, "sans serif"',
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'fontWeight': '500'
  },
  'h3': {
    'fontFamily': ''Impact', Arial Black, "sans serif"',
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'fontWeight': '500'
  },
  // input {border-radius: 0px!important;}
  'bgD': {
    'background': '#DDD'
  },
  'row': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'padding0': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'padding6px': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }]
  },
  'padding16px': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }]
  },
  'margin24': {
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }]
  },
  'margintop15p': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'margintop10': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'marginAll10': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'margintop10p': {
    'marginTop': [{ 'unit': '%V', 'value': 0.1 }]
  },
  'margintop25': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'mtop-16': {
    'marginTop': [{ 'unit': 'px', 'value': -16 }]
  },
  'font16': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '600'
  },
  'font24': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'color333': {
    'color': '#333333'
  },
  'nodecoration': {
    'textDecoration': 'none!important'
  },
  'no-radius': {
    'borderRadius': '0px'
  },
  'border-none': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'height100': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'text-center': {
    'textAlign': 'center'
  },
  'text-justify': {
    'textAlign': 'justify'
  },
  'cursor-pointer': {
    'cursor': 'pointer'
  },
  'min-height': {
    'minHeight': [{ 'unit': 'px', 'value': 650 }]
  },
  'line-height2': {
    'lineHeight': [{ 'unit': 'px', 'value': 2 }]
  },
  'maxwidth60': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.6 }]
  },
  'fieldset': {
    // background-color: #EEEEEE;
    'margin': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }]
  },
  'iconDetalhes': {
    'cursor': 'pointer'
  },
  'iconDetalhes:hover': {
    'color': '#CDCDCD',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  'centered-horizontal': {
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'WebkitTransform': 'translateX(-50%)',
    'MsTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center'
  },
  'centered-absolute': {
    'position': 'relative!',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translate(-50%,-50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center'
  },
  'iframe-centralize': {
    'position': 'relative!important',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'WebkitTransform': 'translateX(-50%)!important',
    'MsTransform': 'translateX(-50%)!important',
    'transform': 'translateX(-50%)!important',
    'alignItems': 'center!important',
    'WebkitAlignItems': 'center!important'
  },
  'margin-right50p': {
    'marginRight': [{ 'unit': '%H', 'value': 0.15 }]
  },
  'navbar-inverse': {
    'height': [{ 'unit': 'px', 'value': 60 }],
    'backgroundColor': '#757577',
    'paddingLeft': [{ 'unit': 'px', 'value': 50 }],
    'paddingRight': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'string', 'value': '!important' }],
    'boxShadow': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#000000' }],
    'fontFamily': ''impactregular', Arial Black, "sans serif"',
    'fontWeight': 'normal',
    'borderRadius': '0px',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-inverse ul li a': {
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontFamily': ''Impact', Arial Black, "sans serif"',
    'color': '#FFFFFF!important',
    'fontWeight': '100'
  },
  'navbar-inverse nav>li': {
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  },
  'navbar-inverse nav>li:hover': {
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  },
  'navbar-inverse nav>li:hover': {
    'color': '#fff',
    'backgroundColor': '#FFFFFF',
    'borderBottom': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2693FF' }],
    'background': 'rgba(255, 255, 255, 0.23)',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  'navbar-right >lino-link-menu:hover': {
    'background': 'transparent!important',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'navbar-inverse navbar-nav>active>a': {
    'color': '#fff',
    'backgroundColor': '#FFFFFF',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#137ee8' }],
    'background': 'rgba(255, 255, 255, 0.23)'
  },
  'navbar-inverse navbar-nav>active>a:focus': {
    'color': '#fff',
    'backgroundColor': '#FFFFFF',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#137ee8' }],
    'background': 'rgba(255, 255, 255, 0.23)'
  },
  'navbar-inverse navbar-nav>active>a:hover': {
    'color': '#fff',
    'backgroundColor': '#FFFFFF',
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#137ee8' }],
    'background': 'rgba(255, 255, 255, 0.23)'
  },
  'navbar-bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'backgroundColor': '#757577'
  },
  'navbar-bottom navbar-brand': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'color': '#FFFFFF'
  },
  'navbar-brand img': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    '<w767': {
      'marginTop': [{ 'unit': 'px', 'value': -10 }],
      'width': [{ 'unit': '%H', 'value': 0.6 }]
    }
  },
  'navbar-menu-footer': {
    'fontFamily': ''Impact', Arial Black, "sans serif"',
    'borderRadius': '0px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }],
    'backgroundColor': '#BBBBBB',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-menu-footer a': {
    'color': 'rgba(0, 0, 0, 1)!important',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'normal'
  },
  'navbar-menu-footer input': {
    'borderRadius': '0px',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#333333',
    'color': 'rgb(255, 255, 255)!important',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }]
  },
  'navbar-default navbar-nav > li > a:hover': {
    'color': 'rgba(255, 255, 255, 1)!important',
    'textDecoration': 'underline',
    'backgroundColor': 'transparent',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  'navbar-default navbar-nav > active > a': {
    'color': 'rgb(255, 255, 255)!important',
    'backgroundColor': 'transparent',
    'textDecoration': 'underline',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  'navbar-default navbar-nav > active > a:hover': {
    'color': 'rgb(255, 255, 255)!important',
    'backgroundColor': 'transparent',
    'textDecoration': 'underline',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  'navbar-default navbar-nav > active > a:focus': {
    'color': 'rgb(255, 255, 255)!important',
    'backgroundColor': 'transparent',
    'textDecoration': 'underline',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  // ICONES REDES SOCIAIS
  'socialIcons': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'transicao': {
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  'socialIcons img': {
    'borderRadius': '50%'
  },
  'socialIcons img:hover': {
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out'
  },
  // PERSONALIZACAO DOS BOTOES
  'btn': {
    'color': '#FFF!important',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 20 }]
  },
  'btn:hover': {
    'WebkitTransition': 'all ease .5s',
    'OTransition': 'all ease .5s',
    'MozTransition': 'all ease .5s',
    'MsTransition': 'all ease .5s',
    'transition': 'all ease .5s'
  },
  'btn-default': {
    'backgroundColor': '#BBBBBB'
  },
  'btn-default:hover': {
    'backgroundColor': '#333333'
  },
  'btn-primary': {
    'backgroundColor': '#137ee8'
  },
  'btn-primary:hover': {
    'backgroundColor': '#205a7a'
  },
  'btn-topmenu': {
    'marginTop': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }]
  },
  'btn-dark': {
    'backgroundColor': '#333333',
    'color': '#FFFFFF'
  },
  'btn-configurador': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 313 }],
    'padding': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 18 }]
  },
  'btn-configurador:hover': {
    'color': '#FFFFFF'
  },
  'imgimg-responsive': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // SLIDES
  'carousel-inner': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'maxHeight': [{ 'unit': 'px', 'value': 630 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'container-slides': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'maxHeight': [{ 'unit': 'px', 'value': 630 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'imgslide01': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.7 }]
  },
  'imgslide02': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.7 }]
  },
  'imgslide03': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.7 }]
  },
  'imgslide04': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.7 }]
  },
  'slide01': {
    'width': [{ 'unit': 'px', 'value': 700 }],
    'position': 'absolute',
    'borderRight': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderBottom': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'zIndex': '4'
  },
  'slide02': {
    'width': [{ 'unit': 'px', 'value': 700 }],
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'zIndex': '1'
  },
  'slide03': {
    'width': [{ 'unit': 'px', 'value': 700 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.297 }],
    'zIndex': '2',
    'borderTop': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': '%V', 'value': 0.08 }]
  },
  'slide04': {
    'width': [{ 'unit': 'px', 'value': 700 }],
    'position': 'relative',
    'float': 'left',
    'borderRight': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '3'
  },
  'carousel-caption': {
    'zIndex': '6'
  },
  'carousel-control': {
    'zIndex': '6'
  },
  'carousel-caption p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '700'
  },
  'imgslide01 + carousel-caption': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.48 }],
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  },
  'imgslide02 + carousel-caption': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.8 }],
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  },
  'imgslide03 + carousel-caption': {
    'left': [{ 'unit': '%H', 'value': 0.68 }],
    'top': [{ 'unit': '%V', 'value': 0.75 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'textAlign': 'right',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  },
  'imgslide04 + carousel-caption': {
    'left': [{ 'unit': '%H', 'value': 0.68 }],
    'top': [{ 'unit': '%V', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'textAlign': 'right',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  },
  // CAROUSEL
  'carouselYoutube': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 40 }]
  },
  'carousel-control': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 100 }],
    'background': '#333',
    'marginTop': [{ 'unit': 'px', 'value': 90 }],
    'zIndex': '6'
  },
  'carousel-controlright': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'right': [{ 'unit': 'px', 'value': -38 }]
  },
  'carousel-controlleft': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'left': [{ 'unit': 'px', 'value': -38 }]
  },
  'carousel-control-slide': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'background': 'transparent',
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'carousel-control-slide >i': {
    'fontSize': [{ 'unit': 'px', 'value': 100 }],
    'fontWeight': '100',
    'marginTop': [{ 'unit': 'px', 'value': 230 }]
  },
  'carousel-control-slide >i:hover': {
    'color': '#2693FF'
  },
  'carousel-control-slidecarousel-controlright': {
    'top': [{ 'unit': 'px', 'value': 15 }]
  },
  'thumbnail-youtube': {
    'background': '#000000',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000000' }],
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderRadius': '0px',
    'WebkitTransform': 'translateX(-50%)',
    'MsTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)',
    'alignItems': 'center',
    'WebkitAlignItems': 'center'
  },
  'navbar-menu-footer ul >li>a': {
    'lineHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  'modal-header': {
    'backgroundColor': '#757577',
    'color': '#FFFFFF'
  },
  'modal-footer': {
    'backgroundColor': '#757577',
    'color': '#FFFFFF'
  },
  'iframe[style]': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'title-block-novidades': {
    'borderRadius': '0px!important',
    'color': '#464542!important',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'hr-title-block': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 3 }],
    'backgroundColor': '#464542'
  },
  // primeira opcao novidades
  'img-block-novidades': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }]
  },
  'text-block-novidades': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'marginLeft': [{ 'unit': 'px', 'value': 100 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'justify',
    'fontWeight': 'bold',
    'color': '#636363'
  },
  'data-block-novidades': {
    'fontSize': [{ 'unit': 'string', 'value': ':' }, { 'unit': 'px', 'value': 10 }],
    'color': '#989898',
    'fontWeight': 'bold'
  },
  // segunda opcap artigos
  'media-heading': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'data-novidades': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'color': '#989898'
  },
  // Thumbnails bloco novidades
  'post-img-content img': {
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }]
  }
});
