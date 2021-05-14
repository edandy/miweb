// window.Parsley.setLocale('es');
console.log('SendForm...')
function getGET(){
    var loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var utms = '';

    for(var i = 0, l = GET.length; i < l; i++){
        utms = utms.concat('&'+GET[i]);
    }
    return utms;
}

var url_page = document.location.href;
var title_page= document.title;
var data_page = '&origin='+title_page+'&page_source='+url_page;


var utms = '';
if(window.location.search.length > 0){
    utms = getGET();
}

var formulario2  = jQuery('.formapidandylead');


formulario2.on('submit', function(e){
    console.log('eeee::: ', e)
    e.preventDefault();
    var form    = jQuery(this);
    url         = form.attr('action');
    data        = form.serialize().concat(utms).concat(data_page);
    button      = form.find('button');
    var formulario = getParameterByName('formulario', url);
    var newUrl = rutaPerform + formulario;
    // if (form.parsley().isValid()) {
        // e.stopImmediatePropagation();
        sendFormProgram(newUrl, data, button, form);
        e.preventDefault();
    // }

});

function sendFormProgram(url, data, button, form) {
    jQuery.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'json',
        beforeSend: function () {
            button.attr("disabled", "disabled");
            button.text('Enviando...');
            jQuery('.error').empty();
        },
        success: function (response) {
            button.attr("disabled", "disabled");
            if (response.success === true){                
                if (response.tipo === 1) {
                    window.location = response.typ;
                }else{
                    swal(
                        '¡Excelente!',
                        response.msj,
                        'success'
                    );
                }                
                button.removeAttr("disabled");
                button.text('Enviado');
                jQuery('input').val('');
                jQuery('select').val('');
                jQuery('textarea').val('');
            }else {
                button.removeAttr("disabled");
                button.text('Enviar');
                showError(response.errors, form);
            }
        },
        error: function (err) {            
            button.removeAttr("disabled");
            button.text('Enviar');
            showError(err);
        }
    });
}


function showError(errors, form){
    console.log('Errors: ', errors, 'Form: ', form)
    jQuery.each( errors , function( key, value ) {
        var errorInput = form.find( "[name="+key+"]" )
        jQuery(errorInput).addClass('parsley-error');
        errorInput.after("<p class='error'>"+value+"</p>")
        // var campo = jQuery(errorInput).parent();
        // campo.addClass('has-error')
        // campo.first().append("<p class='error'>"+value+"</p>");
        // jQuery(errorInput).siblings('.parsley-errors-list').hide();
    });
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$.fn.serializeObject = function() {
  var obj = {};
  var arr = this.serializeArray();
  arr.forEach(function(item, index) {
    if (obj[item.name] === undefined) {
      obj[item.name] = item.value || '';
    } else {
      if (!obj[item.name].push) {
        obj[item.name] = [obj[item.name]];
      }
      obj[item.name].push(item.value || '');
    }
  });
  return obj;
};