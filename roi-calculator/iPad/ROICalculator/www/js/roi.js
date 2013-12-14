(function($) {
    var roi = null;   
	
    roi = { 
        standart:'usa',
        metric: 'metric',
        hardware_price:980,
        installation_and_other_expenses:2,
        contractDuration:12,
        totalExpenses:0,
        totalSavings:0,
        timeouts: [],
        region: 'de-DE',  
        mouseStillDown:false,
        
        graph2:{},
        init: function() {            
            
            this.initVariables();
            this.initEvent();
            this.setSoftfatcs();            
            this.setLanguage();            
            
            $('.basicApp').first().trigger('click');
            
            $('.suggestedApp').first().trigger('click');
            
            $('.default').dropkick();     
            
            $(".readDescripton").fancybox({
                'titlePosition'		: 'inside',
                'transitionIn'		: 'elastic',
                'transitionOut'		: 'elastic'
            });
            
            $('#vehicleType').trigger('change');   
                
            var st = roi.metric==='imperial' ? 1 : 0;
            var uns = units[st];
            for(var i=0; i<uns.length; i++) {
                $("."+uns[i].id).hide().html(uns[i].value).fadeIn();
            } 
           
            roi.createBarGraph();
        },
        initVariables: function() {
	  
        },
        
        initTextAnimation : function(countSoftFacts) {
            var positions = {
                rightToLeft: {
                    start: {
                        top:'20px',                                
                        'font-size': '20px',
                        'font-weight': 500,
                        color: '#AEBBC3',
                        'margin-left':'-40px'
                    }
                },
                leftToRight: {
                    start: {
                        top: '60px',                                
                        'font-size': '20px',
                        color: '#245AA3',
                        'font-weight': 500
                    }
                },
                fadeIn: {
                    start: {
                        left:null,
                        top:'0px',
                        right:'0px',
                        'font-size': '15px',                                
                        'font-weight': 500
                    }
                }
            };  	
            var animateTextArray = new Array();
            var explodeOffset = 0;
            var fadeInOffset = 500;
            var durationOffset = 2600;
            for(var k=0; k<countSoftFacts;k++) {
                animateTextArray.push({
                    offset: explodeOffset,
                    duration: 1000,
                    animation: "explode"
                });
                animateTextArray.push({
                    animation: "rightToLeft",
                    offset: explodeOffset,
                    positions: positions.rightToLeft
                    });
                animateTextArray.push({
                    animation: "leftToRight",
                    offset: explodeOffset,
                    positions: positions.leftToRight
                    });
                animateTextArray.push({
                    offset:fadeInOffset,
                    animation: "fadeIn",
                    positions: positions.fadeIn,
                    duration: durationOffset
                });
                explodeOffset = fadeInOffset + durationOffset;
                fadeInOffset = explodeOffset + 500;
            }
            animateTextArray.push({
                offset: explodeOffset,
                animation: "implode",
                positions: {
                    1: {
                        duration: 4200
                    }
                }
            });
    $("#softfacts").animateText(animateTextArray); 
    
},
        
fallingApple: function($apple, initTop, destTop, initLeft, destLeft, duration) {                
    // animate drop
    $apple.css({
        left: initLeft,
        top: initTop,
        display: 'block'
    }).animate({
        left: destLeft,
        top: destTop
    }, duration, 'easeOutBounce');
},
movingApple: function($apple, top, left) {               
           
    // animate drop
    $apple.css({
        left: left,
        top: top   
    }).animate({
        left: left + 50,
        top: top+20
    }, 2000);
},
        
growTree: function() {   
    var fallingInitTop = 50;
    var fallingInitLeft = 200;
    var fallingDestTop1 = 225;
    var fallingDestTop2 = fallingDestTop1 + 20;
    var fallingDestTop3 = fallingDestTop1 + 53;
    var movingInitLeft = fallingInitLeft + 50;
    var movingDestLeft = movingInitLeft + 25;
    $('#appletree').css({ "width":"240" }); 
    $('.apple').css({ "width":"0" }); 
    $('#apple2').css({"top":"50px", "left":"200px"  });
    $('#apple2').rotate(0);
    roi.timeouts[0] = setTimeout(function(){$('#appletree').animate({  "width": "+=90px" },{duration:3000, easing:'easeOutExpo'  });}, 0);                       
                    
    roi.timeouts[1] = setTimeout(function(){$('#apple0').animate({"width": "+=43px" }, 1000);}, 4000);      
    roi.timeouts[2] = setTimeout(function(){$('#apple1').animate({ "width": "+=43px" }, 1000);}, 4500);  
    roi.timeouts[3] = setTimeout(function(){ $('#apple2').animate({"width": "+=43px"}, 1000);}, 5500);  
            
    roi.timeouts[4] = setTimeout(function(){ roi.fallingApple($('#apple2'), fallingInitTop, fallingDestTop1, fallingInitLeft, fallingInitLeft, 4000);}, 6500);
    roi.timeouts[5] = setTimeout(function(){ roi.movingApple($('#apple2'), fallingDestTop1, fallingInitLeft);}, 10500); 
    roi.timeouts[6] = setTimeout(function(){ $('#savingsButton').rotate({animateTo:10, easing: $.easing.easeOutBounce })}, 8000); 
    roi.timeouts[7] = setTimeout(function(){ $('#apple2').rotate({ animateTo:60,  duration:2000})}, 10500); 
    roi.timeouts[8] = setTimeout(function(){roi.fallingApple($('#apple2'), fallingDestTop2, fallingDestTop3, movingInitLeft, movingDestLeft, 2000);}, 12500); 
    roi.timeouts[9] = setTimeout(function(){ $('#apple2').rotate({animateTo:80, duration:1000})}, 12500); 
    roi.timeouts[10] = setTimeout(function(){$('#savingsButton').rotate({animateTo:0, easing: $.easing.easeOutBounce})}, 12500); 
            
    roi.timeouts[11] = setTimeout(function(){$('#apple3').animate({"width": "+=43px"}, 1000);}, 6500);     
    roi.timeouts[12] = setTimeout(function(){ $('#apple4').animate({ "width": "+=43px" }, 1000); }, 7000);     
    roi.timeouts[13] = setTimeout(function(){ $('#apple5').animate({ "width": "+=43px" }, 1000);}, 8000);               
    roi.timeouts[14] = setTimeout(function(){ $('#apple6').animate({ "width": "+=43px" }, 1000);}, 8500);     
    roi.timeouts[15] = setTimeout(function(){$('#apple7').animate({ "width": "+=43px"}, 1000);}, 6300); 
    roi.timeouts[16] = setTimeout(function(){$('#apple8').animate({ "width": "+=43px"}, 1000);}, 4300); 
    roi.timeouts[17] = setTimeout(function(){ $('#apple9').animate({ "width": "+=43px"}, 1000);}, 3300); 
            
    if($('#digiTachoDownload').attr('data-value') === 'true') { 
        roi.timeouts.push(setTimeout(function(){ $('#apple10').animate({ "width": "+=43px" }, 1000);}, 5700)); 
        roi.timeouts.push(setTimeout(function(){$('#apple11').animate({"width": "+=43px"}, 1000);}, 6600)); 
    }
            
    if($('#fuelConsumption').attr('data-value') === 'true') { 
        roi.timeouts.push(setTimeout(function(){$('#apple12').animate({"width": "+=43px"}, 1000);}, 3800)); 
        roi.timeouts.push(setTimeout(function(){$('#apple13').animate({"width": "+=43px"}, 1000);}, 4100)); 
    }
            
    if($('#gentleDriverTruck').attr('data-value') === 'true') { 
        roi.timeouts.push(setTimeout(function(){$('#apple14').animate({"width": "+=43px"}, 1000);}, 7200)); 
        roi.timeouts.push(setTimeout(function(){$('#apple15').animate({"width": "+=43px"}, 1000);}, 2800)); 
    }
            
    if($('#preTripInspection').attr('data-value') === 'true') { 
        roi.timeouts.push(setTimeout(function(){$('#apple16').animate({"width": "+=43px"}, 1000);}, 5900)); 
        roi.timeouts.push(setTimeout(function(){$('#apple17').animate({"width": "+=43px"}, 1000);}, 4400)); 
        roi.timeouts.push(setTimeout(function(){ $('#apple18').animate({"width": "+=43px"}, 1000);}, 6900)); 
    }
},  
        
formatValues: function($field) {     
    var orgValue = $field.val();
   
    // original was like this
    var dataFormat = roi.metric === 'metric' ? $field.attr('data-format') + ($field.attr('data-money') === 'true' ? "€" : '') : ($field.attr('data-money') === 'true' ? "$" : '')+$field.attr('data-format');
    $field.parseNumber({format: dataFormat, locale: (roi.metric === 'metric' ? "de" : "us")});    
    $field.formatNumber({format: dataFormat, locale:(roi.metric === 'metric' ? "de" : "us")});   
    // original was like this
   
    var formattedValue = $field.val();    
    var decimalSeparator = roi.metric === 'metric' ? "," : ".";
    if(formattedValue && formattedValue.length && formattedValue.indexOf(decimalSeparator) == 0) {
        $field.val("0"+formattedValue);
    }
    if(orgValue == "0" && (formattedValue == null || formattedValue == '')) {
        $field.val(0);
    }
},
        
parseValues: function($field) {       
    var dataFormat = roi.metric === 'metric' ? $field.attr('data-format') + ($field.attr('data-money') === 'true' ? "€" : '') : ($field.attr('data-money') === 'true' ? "$" : '')+$field.attr('data-format');
    $('#generalField').val($field.val());
    $('#generalField').parseNumber({format: dataFormat, locale: (roi.metric === 'metric' ? "de" : "us")}); 
    return parseFloat($('#generalField').val());
},

bindBasicApps: function() {
    $('.basicApp').unbind();
    $('.basicApp').css('cursor','pointer');
    var $basicApps = $('.basicApp');            
    if ($basicApps && $basicApps.length) {                   
        $basicApps.each(function() { 
            var $basicApp = $(this);
            $basicApp.bind("click", function() {   
                $(".basicappdesc").hide();
                $("#"+$basicApp.attr('data-id')).show();
            });
        })                
    }    
},

bindSuggestedApps: function() {
    $('.suggestedApp').unbind();
    $('.suggestedApp').css('cursor','pointer');
    var $suggestedApps = $('.suggestedApp');            
    if ($suggestedApps && $suggestedApps.length) {                   
        $suggestedApps.each(function() { 
            var $suggestedApp = $(this);
            $suggestedApp.bind("click", function() {   
                $(".suggestedAppdesc").hide();
                $("#"+$suggestedApp.attr('data-id')).show();
            });
        })                
    }     
},
        
initEvent: function() {        
   /* 
    $(".header").mousedown(function(event) {
        roi.mouseStillDown = true;                           
        setTimeout(function(){ roi.coolCSSChanger(); }, 5000);         
    })
    
    $(".header").mouseup(function(event) {
        roi.mouseStillDown = false;
    });
    */
    $(".readDescripton").fancybox({
        'titlePosition'		: 'inside',
        'transitionIn'		: 'elastic',
        'transitionOut'		: 'elastic'
    });
    
    roi.bindBasicApps();   
    roi.bindSuggestedApps();     
            
    var $checkboxs = $('img[data-type=checkbox]');
            
    if ($checkboxs && $checkboxs.length) {                
        $checkboxs.each(function() { 
            var $checkbox = $(this); 
                
            $checkbox.bind("click", function() {                
                if($(this).attr("data-value") === "true") {
                    $(this).attr("data-value", "false");
                    $(this).attr("src", "images/notchecked.png");
                } else {
                    $(this).attr("data-value", "true");
                    $(this).attr("src", "images/checked.png");
                    $(this).siblings('a').trigger('click');
                };   
                roi.setSoftfatcs();
            });
        })
    }
            
    $("#calculate").bind("click", function() {                
        roi.validate();   
        if($('.my-tooltip-inner') && $('.my-tooltip-inner').length) {
            // there are still some error, do not set collapsable yet
            return;
        }
       
        for (var i = 0; i < roi.timeouts.length; i++) {
            clearTimeout(roi.timeouts[i]);
        }
        
        $('#apples').html(roi.getOriginalApples());
        $('#treeArea').html(roi.getOriginalTree());
        roi.calculate();   
        roi.growTree();
                
            
    });
                        
    $('.pp').popover();
           
       
    $('.flag').bind("click", function() { 
        roi.standart = $(this).attr("id"); 
                
        var $options = $('#dk_container_contractDuration a[data-link=option]');            
        if ($options && $options.length) {                
            $options.each(function() { 
                var $option = $(this); 
                $option.html(roi.standart === 'usa' ? $option.attr('data-dk-dropdown-value') + ' months' : $option.attr('data-dk-dropdown-value') + ' Monate');
            });                  
            $("#dk_container_contractDuration .dk_label").html($("#dk_container_contractDuration .dk_option_current > a[data-link=option]").html());
        }
              
        $('.flag').removeClass("flagActive");
        $(this).addClass("flagClicked");
        $(this).addClass("flagActive");
        setTimeout(function() {
            $('.flagClicked').removeClass("flagClicked");
        },200)                
                
        // changes text animates        
        roi.setLanguage();
        if(roi.standart == 'usa') {
            $('.german').hide();
            $('.usa').show();
            $('#description > .descTexts').html($('img[data-index='+$('#description').attr('current-index')+']').attr('data-desc-en'));
        } else {                    
            $('.usa').hide();
            $('.german').show();
            $('#description > .descTexts').html($('img[data-index='+$('#description').attr('current-index')+']').attr('data-desc-de'));
        }                
    });
            
    $('#vehicleType').bind("change", function() { 
        if($('.my-tooltip') && $('.my-tooltip').length) {                     
            $('.my-tooltip').remove();
        }
        var vehicleType = $('#dk_container_vehicleType .dk_option_current a').attr('data-dk-dropdown-value');   
       
        var st = roi.metric==='imperial' ? 1 : 0;
        var samples = sampleData[parseInt(vehicleType)+6*st]              
        for(var i=0; i<samples.length; i++) {
            $('#'+samples[i].id).val(samples[i].value);
            $('#'+samples[i].id).css("border", "1px solid #CCC");
            // format initial values
            roi.formatValues($('#'+samples[i].id));
        }                
    });
            
            
    $('#fillSampleData').bind("click", function() { 
        $('#vehicleType').trigger('change'); 
        roi.bindBasicApps();   
        roi.bindSuggestedApps();
    });   
            
    var $fields = $('input[type=text]');            
    if ($fields && $fields.length) {                
        $fields.each(function() {                    
            var $field = $(this);  
            if($field.hasClass('suggestedAppClass')) {
                $field.bind("keyup", function() {                     
                    roi.validateOneField($field);                      
                });	
            } 
            if($field.hasClass('basicAppClass')) {
                $field.bind("keyup", function() {                     
                    roi.validateOneField($field);                      
                });	
            } 
            $field.bind("blur", function() {   
                roi.formatValues($field);
                roi.validateOneField($field);                                 
            });
            $field.bind("focus", function() {                
                roi.removeErrorTooltip($field);
            });                  
                    
                                        
                    
        });
    }
            
    $('#barDescriptionLink').bind("click", function() {         
        if($('#barDescriptionLink').attr('href') === "#barDescription") {
            setTimeout(function(){roi.prepareBarDetail();}, 500);
        }
    }); 
    
    var $tRows = $('.trRow');            
    if ($tRows && $tRows.length) {                
        $tRows.each(function() {                    
            var $tRow = $(this);       
            $tRow.bind("click", function() {         
                if($('.'+ $tRow.attr("id")).is(":visible")) {
                    $('.'+ $tRow.attr("id")).hide();
                    $tRow.find('.vo_shipka_down').hide();
                    $tRow.find('.vo_shipka_right').show();
                    
                } else {
                    $tRow.find('.vo_shipka_right').hide();
                    $tRow.find('.vo_shipka_down').show();                    
                    $('.'+ $tRow.attr("id")).show();
                }
            });         
        });
    }
                       
},
        
validate: function() {            
    var $fields = $('input[type=text]');            
    if ($fields && $fields.length) {                
        $fields.each(function() {                                                          
            roi.validateOneField($(this))
        });                
    }
},
validateOneField: function($field) {   
    var noErrors = true;
    // check for mandatory=
    if($field.attr("data-mandatory") === "true" && ($field.val() == null || $field.val() == '')) {                           
        $field.css("border", "1px solid red");    
        roi.showErrorTooltip($field, (roi.standart === 'german' ? resources_german[28] : resources_usa[28]));
          
        if($field.hasClass('basicAppClass')) {
            $('.basicApp').unbind();
            $('.basicApp').css('cursor','auto');
            noErrors = false;
        }  
        if($field.hasClass('suggestedAppClass')) {
            $('.suggestedApp').unbind();            
            $('.suggestedApp').css('cursor','auto');
            noErrors = false;
        }
    } else if($field.attr("data-digit") === "true") {
        var intRegex = /^\d+$/; 
        var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;
        var digitRegex = $field.attr("data-int") === "true" ? intRegex : floatRegex;                 
        if(!digitRegex.test(roi.parseValues($field))) {                            
            $field.css("border", "1px solid red");
            roi.showErrorTooltip($field, (roi.standart === 'german' ? resources_german[29] : resources_usa[29]));
                    
            if($field.hasClass('basicAppClass')) {
                $('.basicApp').unbind();
                $('.basicApp').css('cursor','auto');
                noErrors = false;
            }  
            if($field.hasClass('suggestedAppClass')) {
                $('.suggestedApp').unbind();            
                $('.suggestedApp').css('cursor','auto');
                noErrors = false;
            }
        }                      
    }  
    
    if($field.hasClass('basicAppClass') && noErrors) {
        roi.removeErrorTooltip($field);        
        roi.bindBasicApps();   
    } 
    
    if($field.hasClass('suggestedAppClass') && noErrors) {
        roi.removeErrorTooltip($field);        
        roi.bindSuggestedApps(); 
    }        
},
        
setLanguage: function() {
    var resources = roi.standart === 'german' ? resources_german : resources_usa;
    for(var i=0; i<resources.length; i++) {                
        $('.label_'+i).html(resources[i]);                
    } 
},
        
setSoftfatcs: function() {    
    var i = 3;
    var html = "";
    // stop all animation with text
    var $texts = $('.softli');            
    if ($texts && $texts.length) {                
        $texts.each(function() {              
            clearTimeout(parseInt($(this).attr("data-timeout")));
        })
    }
    
    var $checkboxs = $('img[data-type=checkbox]');            
    if ($checkboxs && $checkboxs.length) {                
        $checkboxs.each(function() {              
            if($(this).attr("data-value") === "true") {
                html = html + $("#addSoftFactsTexts_" + $(this).attr("data-index")).html();
                i++;
            }
        })
    }
        
    $("#softfacts").html($("#basicSoftFactsTexts").html() + html + $("#addSoftFactsTexts_5").html());
    
    this.initTextAnimation(i);
},
        
removeErrorTooltip: function($field) {
    $field.css("border", "1px solid #CCC");
    if($('#'+$field.attr("id") +'_tooltip')) {
        $('#'+$field.attr("id") +'_tooltip').remove();
    }   
},
        
showErrorTooltip: function($field, message) {
    if($('#'+ $field.attr("id") +'_tooltip') && $('#'+ $field.attr("id") +'_tooltip').length) {                
        // tooltip already exist we just update its text
        $('#'+ $field.attr("id") +'_tooltip .my-tooltip-inner').html(message);
        return;
    }    
    $field.after('<div ' + ($field.hasClass('suggestedAppClass') || $field.hasClass('basicAppClass') ? 'style="left:291px;"' : '') + ' class="my-tooltip fade right in" id="'+ $field.attr("id") +'_tooltip"><div class="my-tooltip-arrow"></div><div class="my-tooltip-inner">'+message+'</div></div>');                          
},
                        
createBarGraph: function() {           
            
    var barValuesNeg = new Array();
    var barValuesPos = new Array();
    var i = 0;
    for(var k=8; k>0; k--) {                
        barValuesNeg[i] = [k, '', "#BCBCBC"];                
        i++;
    }
    for(var k=0; k<4; k++) { 
        barValuesPos[k] = [k+1, '', "#BCBCBC"];                
    }
            
    $('#barGraphDivNeg').jqbargraph({
        data: barValuesNeg,
        width:190,
        height:86,
        barSpace:4,   
        position: 'top'
    }); 
            
    $('#barGraphDivPos').jqbargraph({
        data: barValuesPos,
        width:95,
        height:41,
        barSpace:4
    }); 
},
        
updateBarGraph: function(negId, posId, totalWidth, totalHeight, color) {
    $('#'+negId).empty();
    $('#'+posId).empty();
            
    var totalSavings_per_month = roi.totalSavings / roi.contractDuration;  
            
    var barValuesNeg = new Array();
    var barValuesPos = new Array();
    var index = 0;
    var total = roi.totalExpenses - totalSavings_per_month;            
    while(total > 0) {                                
        barValuesNeg[index] = [total, '', color];
        total = total - totalSavings_per_month;
        index++;
        if(index == roi.contractDuration) {
            break;
        }
    }
    $(".break-even").html(index);
    total = total < 0 ? total * (-1) : total
            
    var widthNeg = parseInt((totalWidth / roi.contractDuration) * index);
    var heightNeg = parseInt((totalHeight / roi.contractDuration) * index);
    var indexPos = 0;            
    while(index < roi.contractDuration) {                  
        barValuesPos[indexPos] = [total, '', color];
        total = total + totalSavings_per_month;
        indexPos++;
        index++;                    
        if(index == roi.contractDuration) {
            break;
        }
    }
            
    var widthPos = parseInt((totalWidth / roi.contractDuration) * indexPos);
    var heightPos = parseInt((totalHeight / roi.contractDuration) * indexPos);
                
    $('#'+negId).jqbargraph({
        data: barValuesNeg,
        width:widthNeg,
        height:heightNeg,
        barSpace:4,   
        position: 'top'
    }); 
            
    $('#'+posId).jqbargraph({
        data: barValuesPos,
        width:widthPos,
        height:heightPos,
        barSpace:4
    }); 
},
        
calculate: function() {   
    var profitAreaMonitoring = 0,
    profitOrderFulfillmentBasic = 0,
    profitTruckNavigation = 0,
    profitVehiclesOverview = 0,
    profitWorkAdvanced = 0,
    profitDigiTachoDownload = 0,
    profitFuelConsumption = 0,
    profitGentleDriver = 0,
    profitPreTripInspection = 0;
                
            
    var contractDuration = parseInt($('#contractDuration').val());           
    var amount_of_vehicles = roi.parseValues($('#amountOfVehicles'));
            
    var standartIndex = roi.metric == 'metric' ? 0 : 9;
    var km_pro_monat;
            
    // area monitoring
    var Einsparung_Wartezeit_bis_Entladung = roi.parseValues($('#reducedWaitingTime'));           
    /* D8 / 60 * D6 = D10*/ 
    var eurPerMonth = (parseInt(appsData[0+standartIndex].Arbeitstage_monat) * ((roi.parseValues($('#costsDriverPerHour')) / 60 )* Einsparung_Wartezeit_bis_Entladung));                                    
    var Einsparung_netto_pro_Fzg_u_Monat = eurPerMonth - parseFloat(appsData[0+standartIndex].App_Kosten);            
    profitAreaMonitoring = Einsparung_netto_pro_Fzg_u_Monat * amount_of_vehicles * contractDuration;
    
    // setting for detail table in popup
    $('#areaMonitoringPerVehiclePerMonth').html(Einsparung_netto_pro_Fzg_u_Monat).formatCurrency({region: roi.region});
    $('#areaMonitoringForFleetPerYear').html(Einsparung_netto_pro_Fzg_u_Monat * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#areaMonitoringForFleet').html(profitAreaMonitoring).formatCurrency({region: roi.region});
     
    // setting details
    $('#am_reducedWaitingTime').html($('#reducedWaitingTime').val());
    $('#am_costDriver').html($('#costsDriverPerHour').val());
    $('#am_watingpervehiclepermonth').html(eurPerMonth).formatCurrency({region: roi.region});
    $('#am_watingfleet').html(eurPerMonth * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#am_appcost').html(parseFloat(appsData[0+standartIndex].App_Kosten)).formatCurrency({region: roi.region});
    $('#am_totalsavemonth').html(Einsparung_netto_pro_Fzg_u_Monat).formatCurrency({region: roi.region});
    $('#am_totalfleet').html(Einsparung_netto_pro_Fzg_u_Monat * amount_of_vehicles * 12).formatCurrency({region: roi.region});
     
            
    // order fulfillment basic app 
    var Einsparung_pro_Auftrag = (roi.parseValues($('#costsLogisticsManager')) / 60 * roi.parseValues($('#durationPerCall'))); 
    var Einsparung_pro_Fahrzeug_im_Monat = roi.parseValues($('#amountOrdersPerTruckPerMonth')) * Einsparung_pro_Auftrag;
    var Netto_Einsparung = Einsparung_pro_Fahrzeug_im_Monat - parseFloat(appsData[1+standartIndex].App_Kosten);            
    profitOrderFulfillmentBasic = Netto_Einsparung * contractDuration * amount_of_vehicles;
    
    // setting for detail table in popup
    $('#orderFullfillmentBasicPerVehiclePerMonth').html(Netto_Einsparung).formatCurrency({region: roi.region});
    $('#orderFullfillmentBasicForFleetPerYear').html(Netto_Einsparung * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#orderFullfillmentBasicForFleet').html(profitOrderFulfillmentBasic).formatCurrency({region: roi.region});
    
    // setting details
    $('#of_durationPerOrder').html($('#durationPerCall').val());
    $('#of_amountOrders').html($('#amountOrdersPerTruckPerMonth').val());
    $('#of_costLogistic').html($('#costsLogisticsManager').val());
    $('#of_savingsPerOrder').html(Einsparung_pro_Auftrag).formatCurrency({region: roi.region}); 
    $('#of_savingsCostLogistic').html(Einsparung_pro_Fahrzeug_im_Monat).formatCurrency({region: roi.region}); 
    $('#of_costLogisticFleet').html(Einsparung_pro_Fahrzeug_im_Monat * amount_of_vehicles * 12).formatCurrency({region: roi.region}); 
    $('#of_appCost').html(appsData[1+standartIndex].App_Kosten).formatCurrency({region: roi.region}); 
    $('#of_totalSavings').html(Netto_Einsparung).formatCurrency({region: roi.region});
    $('#of_totalSavingsFleet').html(Netto_Einsparung * amount_of_vehicles * 12).formatCurrency({region: roi.region});
            
    // truck navigation app      
    var Expected_useful_time_for_Navigation = 24;
    var Kosten_Zeit_Fahrer = roi.parseValues($('#costsDriverPerHour')) / 60 * roi.parseValues($('#detourTimeSaved'));       
    var Spritkosten = roi.parseValues($('#averageConsumption')) / 100 * roi.parseValues($('#detourMilesSaved')) * roi.parseValues($('#averageFuelPrice'));
    var Summe_Brutto_Einsparungspotenzial = Kosten_Zeit_Fahrer + Spritkosten;            
    var Kosten_Navigations_Software_per_monat = parseFloat(appsData[2+standartIndex].Lizenz_Navigations_Software) / Expected_useful_time_for_Navigation;
    var permonthpervehicle_truckNavigation = (Summe_Brutto_Einsparungspotenzial - Kosten_Navigations_Software_per_monat);
    profitTruckNavigation = permonthpervehicle_truckNavigation * contractDuration * amount_of_vehicles;
    
    // setting for detail table in popup
    $('#truckNavigationPerVehiclePerMonth').html(permonthpervehicle_truckNavigation).formatCurrency({region: roi.region});
    $('#truckNavigationForFleetPerYear').html(permonthpervehicle_truckNavigation * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#truckNavigationForFleet').html(profitTruckNavigation).formatCurrency({region: roi.region});
    
    // setting details
    $('#tn_detourTime').html($('#detourTimeSaved').val());
    $('#tn_detourMiles').html($('#detourMilesSaved').val());
    $('#tn_driverCost').html($('#costsDriverPerHour').val());
    $('#tn_fuelConsumption').html($('#averageConsumption').val());
    $('#tn_fuelPrice').html($('#averageFuelPrice').val());
    $('#tn_savedDriverCost').html(Kosten_Zeit_Fahrer).formatCurrency({region: roi.region}); 
    $('#tn_fuelCostsSavedPerMonth').html(Spritkosten).formatCurrency({region: roi.region}); 
    $('#tn_totalSavingsPerVehiclePerMonth').html(Summe_Brutto_Einsparungspotenzial).formatCurrency({region: roi.region}); 
    $('#tn_totalFleet').html(Summe_Brutto_Einsparungspotenzial * amount_of_vehicles * 12).formatCurrency({region: roi.region}); 
    $('#tn_expectedTime').html(Expected_useful_time_for_Navigation);
    $('#tn_tnAppCosten').html(appsData[2+standartIndex].Lizenz_Navigations_Software).formatCurrency({region: roi.region}); 
    $('#tn_tnAppCostenMonthly').html(Kosten_Navigations_Software_per_monat).formatCurrency({region: roi.region});
    $('#tn_breakEven').html(parseInt(appsData[2+standartIndex].Lizenz_Navigations_Software / Summe_Brutto_Einsparungspotenzial));   
    $('#tn_savingsMonth').html(permonthpervehicle_truckNavigation).formatCurrency({region: roi.region});
    $('#tn_savingsTotal').html(permonthpervehicle_truckNavigation * amount_of_vehicles * 12).formatCurrency({region: roi.region});
            
    // vehicles overview app 
    var Kosten_pro_Anruf_VO = roi.parseValues($('#costsLogisticsManager')) / 60 * roi.parseValues($('#durationPerCallV'));
    var Kosten_pro_Monat_Fahrzeug_VO = Kosten_pro_Anruf_VO * 20 * roi.parseValues($('#callsPerVehiclePerDay'));
    var permonthpervehicle_vehicleOverview = (Kosten_pro_Monat_Fahrzeug_VO - parseFloat(appsData[3+standartIndex].App_Kosten));
    profitVehiclesOverview = permonthpervehicle_vehicleOverview * contractDuration * amount_of_vehicles;
    
    // setting for detail table in popup
    $('#vehiclesOverviewPerVehiclePerMonth').html(permonthpervehicle_vehicleOverview).formatCurrency({region: roi.region});
    $('#vehiclesOverviewForFleetPerYear').html(permonthpervehicle_vehicleOverview * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#vehiclesOverviewForFleet').html(profitVehiclesOverview).formatCurrency({region: roi.region});  
    
    // setting details
    $('#vo_costsLogisticsManager').html($('#costsLogisticsManager').val());
    $('#vo_callpervehicleperday').html($('#callsPerVehiclePerDay').val());
    $('#vo_durationCall').html($('#durationPerCallV').val());
    $('#vo_savingspercall').html(Kosten_pro_Anruf_VO).formatCurrency({region: roi.region});
    $('#vo_savingspervehicle').html(Kosten_pro_Monat_Fahrzeug_VO).formatCurrency({region: roi.region});
    $('#vo_savingsperfleet').html(Kosten_pro_Monat_Fahrzeug_VO * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#vo_costsApp').html(parseFloat(appsData[3+standartIndex].App_Kosten)).formatCurrency({region: roi.region});
    $('#vo_totalpervehiclepermonth').html(permonthpervehicle_vehicleOverview).formatCurrency({region: roi.region});
    $('#vo_forfleerperyear').html(permonthpervehicle_vehicleOverview * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    
            
    // work advanced app
    var tatsachliche_Auslastung_LKW_WA = parseFloat(appsData[4+standartIndex].Maximale_Fahrzeit_100_Procent_im_Monat_hour) * roi.parseValues($('#vehicleUtilisation')) / 100;
    var Steigerung_in_h_Monat_WA = tatsachliche_Auslastung_LKW_WA + (tatsachliche_Auslastung_LKW_WA * roi.parseValues($('#increasmentVehicleUtilisation')) / 100); 
    var Vehicle_utilisation_new = roi.parseValues($('#vehicleUtilisation')) + (roi.parseValues($('#vehicleUtilisation')) * roi.parseValues($('#increasmentVehicleUtilisation')) / 100); 
    var Zusatzstunden_Monat_Fahrzeug_WA = Steigerung_in_h_Monat_WA - tatsachliche_Auslastung_LKW_WA;
    var Zusatzkilometer_Monat_Fahrzeug_WA = roi.parseValues($('#averageSpeed')) * Zusatzstunden_Monat_Fahrzeug_WA;
    var Zusatzergebnis_pro_Monat_Fahrzeug_WA = Zusatzkilometer_Monat_Fahrzeug_WA * roi.parseValues($('#profitPerFreightKilometer'));
    var Netto_Zusatz_Monat_Fahrzeug_WA =  Zusatzergebnis_pro_Monat_Fahrzeug_WA - parseFloat(appsData[4+standartIndex].App_Kosten);            
    profitWorkAdvanced = Netto_Zusatz_Monat_Fahrzeug_WA * contractDuration * amount_of_vehicles;
    
    // setting for detail table in popup
    $('#workAdvancedPerVehiclePerMonth').html(Netto_Zusatz_Monat_Fahrzeug_WA).formatCurrency({region: roi.region});
    $('#workAdvancedForFleetPerYear').html(Netto_Zusatz_Monat_Fahrzeug_WA * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#workAdvancedForFleet').html(profitWorkAdvanced).formatCurrency({region: roi.region});  
    
    // setting details
    $('#wa_maxdrivingtime').html(appsData[4+standartIndex].Maximale_Fahrzeit_100_Procent_im_Monat_hour);
    $('#wa_vehicleUtil').html($('#vehicleUtilisation').val());
    $('#wa_realDrivingTime').html(tatsachliche_Auslastung_LKW_WA.toFixed(1));
    $('#wa_vehicleIncreasment').html($('#increasmentVehicleUtilisation').val());
    $('#wa_vehicleUtilNew').html(parseInt(Vehicle_utilisation_new));
    $('#wa_drivingtimenew').html(Steigerung_in_h_Monat_WA.toFixed(1));    
    $('#wa_addHours').html(Zusatzstunden_Monat_Fahrzeug_WA.toFixed(1));
    $('#wa_averageSpeed').html($('#averageSpeed').val());
    $('#wa_addKilometers').html(parseInt(Zusatzkilometer_Monat_Fahrzeug_WA));
    $('#wa_profit').html($('#profitPerFreightKilometer').val()).formatCurrency({region: roi.region});    
    $('#wa_addProfit').html(Zusatzergebnis_pro_Monat_Fahrzeug_WA).formatCurrency({region: roi.region});
    $('#wa_addProfitFleet').html(Zusatzergebnis_pro_Monat_Fahrzeug_WA * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#wa_appCost').html(parseFloat(appsData[4+standartIndex].App_Kosten)).formatCurrency({region: roi.region});
    $('#wa_totalVehicleMonth').html(Netto_Zusatz_Monat_Fahrzeug_WA).formatCurrency({region: roi.region});
    $('#wa_totalFleetYear').html(Netto_Zusatz_Monat_Fahrzeug_WA * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    
    var basicTotalPerVehiclePerMonth = Einsparung_netto_pro_Fzg_u_Monat + Netto_Einsparung + permonthpervehicle_truckNavigation + permonthpervehicle_vehicleOverview + Netto_Zusatz_Monat_Fahrzeug_WA;
    
    // setting for detail table in popup
    $('#basicTotalPerVehiclePerMonth').html(basicTotalPerVehiclePerMonth).formatCurrency({region: roi.region});
    $('#basicTotalForFleetPerYear').html(basicTotalPerVehiclePerMonth * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#basicTotalForFleet').html(basicTotalPerVehiclePerMonth * amount_of_vehicles * contractDuration).formatCurrency({region: roi.region});    
            
     
    $('#digiTachoDownloadRow').hide();       
    $('#fuelConsumptionRow').hide();
    $('#gentleDriverTruckRow').hide();
    $('#pre-TripInspectionRow').hide();
    $('#suggestedAppTable').hide();
    $('.digiTachoDownloadRow').hide();       
    $('.fuelConsumptionRow').hide();
    $('.gentleDriverTruckRow').hide();
    $('.pre-TripInspectionRow').hide();    
     
    var suggestedTotalPerVehiclePerMonth  = 0;
    // digiTacho download app            
    if($('#digiTachoDownload').attr('data-value') === 'true') {     
        /*  B7 / 60 * 40 */       
        var Kosten_je_Fahrzeug_pro_Auslesung = roi.parseValues($('#labourCostsForManualDownload')) / 60 * roi.parseValues($('#timeManualDownload'));                
        var Kosten_je_Fahrzeug_pro_Monat = Kosten_je_Fahrzeug_pro_Auslesung / roi.parseValues($('#frequencyDownload'));     
        var Kosten_Extrakilometer_im_Monat = roi.parseValues($('#averageConsumption')) / 100 * roi.parseValues($('#extraMilesToDepot')) * roi.parseValues($('#averageFuelPrice'));
        var Gesamtkosten = Kosten_je_Fahrzeug_pro_Monat + Kosten_Extrakilometer_im_Monat;
        var app_kosten = parseFloat(appsData[5+standartIndex].App_Kosten_download) + parseFloat(appsData[5+standartIndex].App_Kosten_info);
        var permonthpervehicle_digiTachoDownload = (Gesamtkosten  - app_kosten);
        profitDigiTachoDownload = permonthpervehicle_digiTachoDownload * contractDuration * amount_of_vehicles;
        
        $('#suggestedAppTable').show();
        $('#digiTachoDownloadRow').show();
        // setting for detail table in popup
        $('#digiTachoDownloadPerVehiclePerMonth').html(permonthpervehicle_digiTachoDownload).formatCurrency({region: roi.region});
        $('#digiTachoDownloadForFleetPerYear').html(permonthpervehicle_digiTachoDownload * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        $('#digiTachoDownloadForFleet').html(profitDigiTachoDownload).formatCurrency({region: roi.region});    
        
        // setting details
        $('#dd_download').html($('#timeManualDownload').val());
        $('#dd_laborCost').html($('#labourCostsForManualDownload').val());
        $('#dd_downloadCost').html(Kosten_je_Fahrzeug_pro_Auslesung).formatCurrency({region: roi.region}); 
        $('#dd_frequency').html($('#frequencyDownload').val());
        $('#dd_savingLabor').html(Kosten_je_Fahrzeug_pro_Monat).formatCurrency({region: roi.region}); 
        $('#dd_extraMiles').html($('#extraMilesToDepot').val()); 
        $('#dd_FuelConsumption').html($('#averageConsumption').val()); 
        $('#dd_fuelPrice').html($('#averageFuelPrice').val()); 
        $('#dd_savingsExtraMiles').html(Kosten_Extrakilometer_im_Monat).formatCurrency({region: roi.region}); 
        $('#dd_totalSavings').html(Gesamtkosten).formatCurrency({region: roi.region}); 
        $('#dd_totalSavingsFleet').html(Gesamtkosten * amount_of_vehicles * 12).formatCurrency({region: roi.region}); 
        $('#dd_costDD').html(appsData[5+standartIndex].App_Kosten_download).formatCurrency({region: roi.region});
        $('#dd_costDD8').html(appsData[5+standartIndex].App_Kosten_info).formatCurrency({region: roi.region});
        $('#dd_appCost').html(app_kosten).formatCurrency({region: roi.region});   
        $('#dd_totalSavings1').html(permonthpervehicle_digiTachoDownload).formatCurrency({region: roi.region});
        $('#dd_totalSavingsFleet1').html(permonthpervehicle_digiTachoDownload * amount_of_vehicles * 12).formatCurrency({region: roi.region});    
        
        suggestedTotalPerVehiclePerMonth = suggestedTotalPerVehiclePerMonth + permonthpervehicle_digiTachoDownload;
    }
            
    // fuel consumption app            
    if($('#fuelConsumption').attr('data-value') === 'true') {                       
        //km_pro_monat = roi.parseValues($('#averageDistancePerYear')) / 12;
        // var Einsparung_fuel = (roi.parseValues($('#averageConsumption')) * roi.parseValues($('#reducedFuelConsumption')) / 100) * roi.parseValues($('#averageFuelPrice'));                
        // var Einsparung_fuel_Monat = Einsparung_fuel * km_pro_monat / 100;  
        var Einsparung_Zeit_manuelles_Erfassen_hours_monate = roi.parseValues($('#timeManualControlsPerVehicle')) * 20 / 60;
        var Stundenlohn_manuelles_erfassen = roi.parseValues($('#laborCostsManualControls')) * Einsparung_Zeit_manuelles_Erfassen_hours_monate;
        var permonthpervehicle_fuelConsumption = (Stundenlohn_manuelles_erfassen - parseFloat(appsData[6+standartIndex].App_Kosten));
        profitFuelConsumption = permonthpervehicle_fuelConsumption * contractDuration * amount_of_vehicles;
        
        $('#suggestedAppTable').show();
        $('#fuelConsumptionRow').show();
        // setting for detail table in popup
        $('#fuelConsumptionPerVehiclePerMonth').html(permonthpervehicle_fuelConsumption).formatCurrency({region: roi.region});
        $('#fuelConsumptionForFleetPerYear').html(permonthpervehicle_fuelConsumption * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        $('#fuelConsumptionForFleet').html(profitFuelConsumption).formatCurrency({region: roi.region});  
        
        // setting details
        $('#fc_timemanual').html($('#timeManualControlsPerVehicle').val());
        $('#fc_timemanualMonth').html(parseInt(roi.parseValues($('#timeManualControlsPerVehicle')) * 20));
        $('#fc_laborCost').html($('#laborCostsManualControls').val()); 
        $('#fc_savingsmanual').html(Stundenlohn_manuelles_erfassen).formatCurrency({region: roi.region});
        $('#fc_appcost').html(appsData[6+standartIndex].App_Kosten).formatCurrency({region: roi.region});   
        $('#fc_totalSavings').html(permonthpervehicle_fuelConsumption).formatCurrency({region: roi.region});
        $('#fc_totalSavingsFleet').html(permonthpervehicle_fuelConsumption * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        
        suggestedTotalPerVehiclePerMonth = suggestedTotalPerVehiclePerMonth + permonthpervehicle_fuelConsumption;
    }
            
    // gentle driver truck app            
    if($('#gentleDriverTruck').attr('data-value') === 'true') {                     
        km_pro_monat = roi.parseValues($('#averageDistancePerYear')) / 12;              
        var Einsparung_je_100km = (roi.parseValues($('#averageConsumption')) * roi.parseValues($('#reducedFuelConsumptionGentle')) / 100) * roi.parseValues($('#averageFuelPrice'));                               
        var Einsparung_Gesamtlaufleistung_Fahrzeug = Einsparung_je_100km * km_pro_monat / 100;                 
        var permonthpervehicle_gentleDriver = (Einsparung_Gesamtlaufleistung_Fahrzeug - parseFloat(appsData[7+standartIndex].App_Kosten) - parseFloat(appsData[7+standartIndex].App_Kosten_DriverFeedback));
        profitGentleDriver = permonthpervehicle_gentleDriver * contractDuration * amount_of_vehicles;
        
        $('#suggestedAppTable').show();
        $('#gentleDriverTruckRow').show();
        // setting for detail table in popup
        $('#gentleDriverTruckPerVehiclePerMonth').html(permonthpervehicle_gentleDriver).formatCurrency({region: roi.region});
        $('#gentleDriverTruckForFleetPerYear').html(permonthpervehicle_gentleDriver * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        $('#gentleDriverTruckForFleet').html(profitGentleDriver).formatCurrency({region: roi.region});
        
        // setting details
        $('#gdt_reduction').html($('#reducedFuelConsumptionGentle').val());
        $('#gdt_distance').html($('#averageDistancePerYear').val());
        $('#gdt_distancemonth').html(parseInt(km_pro_monat)); 
        $('#gdt_fuelConsumption').html($('#averageConsumption').val());
        $('#gdt_fuelPrice').html($('#averageFuelPrice').val()); 
        var fuelCost = roi.parseValues($('#averageConsumption')) * roi.parseValues($('#averageFuelPrice'));
        $('#gdt_fuelCost').html(fuelCost).formatCurrency({region: roi.region});          
        $('#gdt_savingsFuelCost').html(Einsparung_je_100km).formatCurrency({region: roi.region}); 
        $('#gdt_reducedFuelCosts').html(fuelCost - Einsparung_je_100km).formatCurrency({region: roi.region});  
        $('#gdt_fuelCostPerVehiclePerMonth').html(Einsparung_Gesamtlaufleistung_Fahrzeug).formatCurrency({region: roi.region}); 
        $('#gdt_fuelCostFleet').html(Einsparung_Gesamtlaufleistung_Fahrzeug * amount_of_vehicles * 12).formatCurrency({region: roi.region}); 
        $('#gdt_appcostGDT').html(appsData[7+standartIndex].App_Kosten).formatCurrency({region: roi.region}); 
        $('#gdt_appcostDF').html(appsData[7+standartIndex].App_Kosten_DriverFeedback).formatCurrency({region: roi.region});        
        $('#gdt_appcost').html(parseFloat(appsData[7+standartIndex].App_Kosten) + parseFloat(appsData[7+standartIndex].App_Kosten_DriverFeedback)).formatCurrency({region: roi.region});   
        $('#gdt_totalSavings').html(permonthpervehicle_gentleDriver).formatCurrency({region: roi.region});
        $('#gdt_totalSavingsFleet').html(permonthpervehicle_gentleDriver * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        
        suggestedTotalPerVehiclePerMonth = suggestedTotalPerVehiclePerMonth + permonthpervehicle_gentleDriver;
    }
            
    // pre-trip inspection app            
    if($('#preTripInspection').attr('data-value') === 'true') {                                    
        var labor_cost = roi.parseValues($('#timeManualChecks')) * 20 / 60 * roi.parseValues($('#laborCostsWorkshopEmployees'));
        var permonthpervehicle_preTripInspection = labor_cost - parseFloat(appsData[8+standartIndex].App_Kosten);
        profitPreTripInspection = permonthpervehicle_preTripInspection * contractDuration * amount_of_vehicles;
        
        $('#suggestedAppTable').show();
        $('#pre-TripInspectionRow').show();
        // setting for detail table in popup
        $('#pre-TripInspectionPerVehiclePerMonth').html(permonthpervehicle_preTripInspection).formatCurrency({region: roi.region});
        $('#pre-TripInspectionForFleetPerYear').html(permonthpervehicle_preTripInspection * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        $('#pre-TripInspectionForFleet').html(profitPreTripInspection).formatCurrency({region: roi.region});
        
        // setting details
        $('#pi_timemanual').html($('#timeManualChecks').val());
        $('#pi_timemanualMonth').html(parseInt(roi.parseValues($('#timeManualChecks')) * 20));
        $('#pi_laborCost').html($('#laborCostsWorkshopEmployees').val()); 
        $('#pi_laborcostwork').html(labor_cost).formatCurrency({region: roi.region});
        $('#pi_appcost').html(appsData[8+standartIndex].App_Kosten).formatCurrency({region: roi.region});   
        $('#pi_totalSavings').html(permonthpervehicle_preTripInspection).formatCurrency({region: roi.region});
        $('#pi_totalSavingsFleet').html(permonthpervehicle_preTripInspection * amount_of_vehicles * 12).formatCurrency({region: roi.region});
        
        suggestedTotalPerVehiclePerMonth = suggestedTotalPerVehiclePerMonth + permonthpervehicle_preTripInspection;
    }
    
    // setting for detail table in popup
    $('#suggestedTotalPerVehiclePerMonth').html(suggestedTotalPerVehiclePerMonth).formatCurrency({region: roi.region});
    $('#suggestedTotalForFleetPerYear').html(suggestedTotalPerVehiclePerMonth * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#suggestedTotalForFleet').html(suggestedTotalPerVehiclePerMonth * amount_of_vehicles * contractDuration).formatCurrency({region: roi.region});    
        
    $('#hardwarePerUnit').html(roi.hardware_price).formatCurrency({region: roi.region});
    $('#hardwareTotal').html(roi.hardware_price * amount_of_vehicles).formatCurrency({region: roi.region});
    $('#setupPerUnit').html(roi.installation_and_other_expenses).formatCurrency({region: roi.region});    
    $('#setupTotal').html(roi.installation_and_other_expenses * amount_of_vehicles).formatCurrency({region: roi.region});  
    $('#costTotalPerUnit').html(roi.hardware_price + roi.installation_and_other_expenses).formatCurrency({region: roi.region});    
    $('#costTotalForFleet').html((roi.hardware_price + roi.installation_and_other_expenses) * amount_of_vehicles).formatCurrency({region: roi.region});
    
    var totalCostPerUnit_perMonth = (roi.hardware_price + roi.installation_and_other_expenses) / contractDuration;
    var totalSavingsFromTwoPackage = basicTotalPerVehiclePerMonth + suggestedTotalPerVehiclePerMonth - totalCostPerUnit_perMonth;
    
    $('#totalSavingsPerMonth').html(totalSavingsFromTwoPackage).formatCurrency({region: roi.region});
    $('#totalSavingsForFleetPerYear').html(totalSavingsFromTwoPackage * amount_of_vehicles * 12).formatCurrency({region: roi.region});
    $('#totalSavingsForFleet').html(totalSavingsFromTwoPackage * amount_of_vehicles * contractDuration).formatCurrency({region: roi.region});    
    
        
    var expenses = (roi.hardware_price + roi.installation_and_other_expenses) * amount_of_vehicles;
    var totalSavings = profitAreaMonitoring + profitOrderFulfillmentBasic +
    profitTruckNavigation + profitVehiclesOverview +
    profitWorkAdvanced + profitDigiTachoDownload +
    profitFuelConsumption + profitGentleDriver +
    profitPreTripInspection;    
            
    //  $('#testResuls').html(totalSavings);
    //  return;
            
    roi.totalSavings = totalSavings;                   
    roi.totalExpenses = expenses;
    roi.contractDuration = contractDuration;
        
    jQuery({someValue: 0}).animate({someValue: (totalSavings - expenses)}, {duration: 3000,                
        step: function() { // called on every step
            $('#resultInMoney').html(this.someValue);            
            $('#resultInMoney').formatCurrency({
                region: roi.region
            });    
            $('#resultInMoney').html($('#resultInMoney').html()+'/'+contractDuration + ' <span class="usa" '+ (roi.standart == 'german' ? 'style="display:none;"' : '') +'> months</span><span class="german" '+
                      (roi.standart == 'usa' ? 'style="display:none;"' : '') +'> Monate</span>'); 
        }
    });            
    
    setTimeout(function(){        
        $('#resultInMoney').html(totalSavings - expenses);            
            $('#resultInMoney').formatCurrency({
                region: roi.region
            });    
            $('#resultInMoney').html($('#resultInMoney').html()+'/'+contractDuration + ' <span class="usa" '+ (roi.standart == 'german' ? 'style="display:none;"' : '') +'> months</span><span class="german" '+
                      (roi.standart == 'usa' ? 'style="display:none;"' : '') +'> Monate</span>'); 
    }, 3200);  
            
    var totalSavings_per_halfYear = (totalSavings / contractDuration) * 6;  
    var expenses_per_halfYear = expenses / 2;  
    var barValues = new Array([[expenses_per_halfYear, totalSavings_per_halfYear - expenses_per_halfYear], "The First 6 Months"],
        [[expenses_per_halfYear, totalSavings_per_halfYear - expenses_per_halfYear], "Next 6 Months"]);
                
            
    $('#barDescriptionLink').attr('href', '#barDescription');            
    roi.updateBarGraph('barGraphDivNeg', 'barGraphDivPos', 285, 120, "#BCBCBC");  
    
                        
    $('.vehicleCount').html(amount_of_vehicles);
    $('.contractDuration').html(contractDuration);
    $('.reducedTime').html(Einsparung_Wartezeit_bis_Entladung);
    $('.costDriver').html(roi.parseValues($('#costsDriverPerHour')));
    $('.appPrice').html(parseFloat(appsData[0+standartIndex].App_Kosten));
    
    // prepare bar graph detail popup
    
            
},
        
prepareBarDetail: function() {
    roi.updateBarGraph('barGraphDivNegDetail', 'barGraphDivPosDetail', 710, 150, "#BCBCBC");
},

getOriginalApples: function() {
    return '<img id="apple0" style="top:90px;left:240px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple1" style="top:150px;left:250px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple2" style="top:50px;left:200px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple3" style="top:90px;left:170px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple4" style="top:10px;left:140px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple5" style="top:60px;left:70px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple6" style="top:145px;left:130px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple7" style="top:165px;left:80px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple8" style="top:70px;left:120px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
           '<img id="apple9" style="top:105px;left:40px;" class="apple" src="images/apple.png" width="0" height="0"/>'+

           '<!-- DigiTacho Download -->'+
           '<img id="apple10" class="apple" src="images/apple.png" width="0" height="0"'+
                'style="top:20px;left:175px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+  
           '<img id="apple11" class="apple" src="images/apple.png" width="0" height="0"'+ 
                'style="top:175px;left:20px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+

           '<!-- Fuel Consumption -->'+                    
           '<img id="apple12" class="apple" src="images/apple.png" width="0" height="0"'+
                'style="top:40px;left:220px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+  
           '<img id="apple13" class="apple" src="images/apple.png" width="0" height="0"'+ 
                'style="top:170px;left:170px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+

           '<!-- Gentle Driver Truck -->'+                   
           '<img id="apple14" class="apple" src="images/apple.png" width="0" height="0"'+
                'style="top:130px;left:200px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+  
           '<img id="apple15" class="apple" src="images/apple.png" width="0" height="0"'+ 
                'style="top:125px;left:90px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+

           '<!-- Pre-trip Inspection -->'+                    
           '<img id="apple16" class="apple" src="images/apple.png" width="0" height="0"'+
                'style="top:30px;left:110px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+  
           '<img id="apple17" class="apple" src="images/apple.png" width="0" height="0"'+ 
                'style="top:120px;left:270px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+
           '<img id="apple18" class="apple" src="images/apple.png" width="0" height="0"'+ 
                'style="top:180px;left:280px;transform:rotate(-30deg);-ms-transform:rotate(-30deg);-moz-transform:rotate(-30deg);-webkit-transform:rotate(-30deg); -o-transform:rotate(-30deg);"/>';
                
},

 getOriginalApplesOriginal: function() {
 return '<img id="apple0" style="top:110px;left:240px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple1" style="top:170px;left:250px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple2" style="top:70px;left:200px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple3" style="top:110px;left:170px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple4" style="top:30px;left:140px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple5" style="top:80px;left:70px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple6" style="top:165px;left:130px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple7" style="top:185px;left:80px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple8" style="top:90px;left:120px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 '<img id="apple9" style="top:125px;left:40px;" class="apple" src="images/apple.png" width="0" height="0"/>'+
 
 '<!-- DigiTacho Download -->'+
 '<img id="apple10" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:40px;left:175px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+
 '<img id="apple11" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:195px;left:20px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+
 
 '<!-- Fuel Consumption -->'+
 '<img id="apple12" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:60px;left:220px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+
 '<img id="apple13" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:190px;left:170px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+
 
 '<!-- Gentle Driver Truck -->'+
 '<img id="apple14" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:150px;left:200px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+
 '<img id="apple15" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:135px;left:90px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+
 
 '<!-- Pre-trip Inspection -->'+
 '<img id="apple16" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:50px;left:110px;transform:rotate(-25deg);-ms-transform:rotate(-25deg);-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg); -o-transform:rotate(-25deg);"/>'+
 '<img id="apple17" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:140px;left:270px;transform:rotate(-20deg);-ms-transform:rotate(-20deg);-moz-transform:rotate(-20deg);-webkit-transform:rotate(-20deg); -o-transform:rotate(-20deg);"/>'+
 '<img id="apple18" class="apple" src="images/apple.png" width="0" height="0"'+
 'style="top:200px;left:280px;transform:rotate(-30deg);-ms-transform:rotate(-30deg);-moz-transform:rotate(-30deg);-webkit-transform:rotate(-30deg); -o-transform:rotate(-30deg);"/>';
 
 },
 
 
getOriginalTree: function() {
    return '<img id="appletree" style="margin-bottom: -60px; " src="images/tree.png" width="240" height="240" />'+
           '<button id="savingsButton" class="savings"><span id="resultInMoney"></span></button>';
},

coolCSSChanger: function() {
    if (roi.mouseStillDown) {
        if($("#changableCSS").attr("data-current-href") == 'white') {
            $("#changableCSS").attr("href", $("#changableCSS").attr('data-original-href'));
            $("#changableCSS").attr("data-current-href", "original");
            $('.splitter').hide();
        } else {
            $("#changableCSS").attr("href", $("#changableCSS").attr('data-href'));
            $("#changableCSS").attr("data-current-href", "white");
            $('.splitter').show();
        }	
    }
}
        
};

$(function() {
    roi.init();
});
})(jQuery);