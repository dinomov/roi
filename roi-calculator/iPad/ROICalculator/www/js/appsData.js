var appsData = {};
appsData = [
/* EUROPE standart */            
/* area monitoring app */
{
    'Arbeitstage_monat': '20',    
    'App_Kosten': '2.99'
},          
/* order fulfillment basic app */
{      
    'App_Kosten': '5.99'
},    
/* truck navigation app */
{
    'Lizenz_Navigations_Software' : '199.00'    
},  
/* vehicles overview app */
{    
    'App_Kosten': '2.99'
},  
/* work advanced app */
{
    'Maximale_Fahrzeit_100_Procent_im_Monat_hour': '176',
    'App_Kosten': '2.99'
},  
/* digitacho download app */
{         
    'App_Kosten_download': '5.99',
    'App_Kosten_info': '1.99'
},  
/* fuel consumption app */            
{
    'App_Kosten': '2.99'
},   
/* gentle driver app */              
{
    'App_Kosten': '8.99',
    'App_Kosten_DriverFeedback': '5.99'
},  
/* pre-trip inspection app */
{               
    'App_Kosten': '7.99'
},       

/* USA standart */
/* area monitoring app */
{     
    'Arbeitstage_monat': '20',    
    'App_Kosten': '3.99'
},          
/* order fulfillment basic app */
{     
    'App_Kosten': '7.99'
},    
/* truck navigation app */
{     
    'Lizenz_Navigations_Software' : '200.00'    
},  
/* vehicles overview app */
{   
    'App_Kosten': '3.99'
},  
/* work advanced app */
{
    'Maximale_Fahrzeit_100_Procent_im_Monat_hour': '176',    
    'App_Kosten': '5.49'
},  
/* digitacho download app */
{    
    'App_Kosten_download': '2.99',
    'App_Kosten_info': '2.50'
},  
/* fuel consumption app */            
{
    'App_Kosten': '3.99'
},   
/* gentle driver app */              
{    
    'App_Kosten': '7.99',
    'App_Kosten_DriverFeedback': '9.10'
},  
/* pre-trip inspection app */
{                 
    'App_Kosten': '10.79'
}            

];



var resources_usa = {};

resources_usa = [
    'ROI Calculator',
    'Enter fleet parameters',
    'Enter basic app parameters',
    'Your estimated savings',
    'Vehicle type',
    'Amount of vehicles in fleet',
    'Fuel consumption',
    'Fuel price',
    'Distance per vehicle',
    'Contract duration [months]',
    'Average operating hours <br/>(per vehicle per year)',
    'Costs logistics manager',
    'Costs driver',
    'Reduced waiting time <br/>per vehicle per day ',
    '(announcement of arrival) [min]',
    'Amount of orders <br/>per vehicle per month',
    'Vehicle costs',
    'Average calls per day (calls/day)',
    'Select further apps',
    'Labour costs <br/>manual download',
    'Reduced fuel consumption [%]',
    'Reduced fuel consumption [%]',
    'Average maintenance cost per truck',
    'Average savings maintenance (%)',
    'Time manual checks <br/>per vehicle per day [min]',
    ' Fill sample data',
    ' Calculate',
    ' Request call-back',
    'The field is required!',
    'Wrong input data!',
    'Click here for explanation of calculation assumptions!',
    'Duration per order <br/>discussion [min]',
    'Detour time saved<br/>per vehicle per month [min]',
    'Detour miles saved<br/>per vehicle per month',
    'Calls per vehicle per day<br/>(check vehicle location)',
    'Duration per call<br/>(check vehicle location) [min]',
    'Vehicle utilisation<br/>in percent (176 hrs max) [%]',
    'Increasment vehicle utilisation<br/>(simplified dispatching) [%]',
    'Profit per freight kilometer',
    'Average speed',
    'Time manual download [min]',
    'Frequency download digital tachograph (mass data and driver cards) [times per month]',
    'Extra miles to depot <br/>(for download)',
    'Time manual controls <br/>per vehicle per day [min]',
    'Labor costs manual controls',    
    'Labor costs <br/>workshop employees',       
    'The app offers a simple and effective option for vehicle monitoring. Fleet operators are informed via...', /* 46-line */ 
    'Good fleet management goes hand in hand with rapid, clear communication between the transport company...', /* 47-line */ 
    'A navigation system for trucks has to be able to do more than show a generic fastest or shortest route...', /* 48-line */ 
    'The app can easily track the current location of a vehicle via the web portal. The app shows the position...', /* 49-line */ 
    'The app documents a vehicle\'s operation. It serves as a vehicle logbook and includes driving and idle...', /* 50-line */ 
    'The digital tachograph gathers the drivers\' driving and rest times in commercial vehicles...', /* 51-line */ 
    'How high are the fuel consumption and CO2 emissions of a single vehicle...', /* 52-line */ 
    'The cost-efficiency of trucks on the road also depends on the person behind the wheel...', /* 53-line */ 
    'Vehicles are generally inspected before they leave the garage. Until now, the drivers...' /* 54-line */ 
];

var resources_german = {};

resources_german = [
    'ROI Rechner',
    'Flottenparameter eingeben',
    'Parameter für Basis Apps eingeben',
    'Ihr Einsparpotenzial',
    'Fahrzeugkategorie',
    'Anzahl Fahrzeuge in Flotte',
    'Kraftstoffverbrauch',
    'Kraftstoffpreis',
    'Laufleistung Fahrzeuge',
    'Vertragsdauer [Monate]',
    'Durchschnittliche Betriebsdauer <br/>(pro Fahrzeug im Jahr)',
    'Kosten Disponent',
    'Kosten Fahrer',
    'Reduzierung Wartezeit <br/>pro Fahrzeug pro Tag',
    '(durch Ankunftsmeldung) [min]',
    'Anzahl Aufträge <br/>pro Fahrzeug pro Monat',
    'Fahrzeugkosten',
    'Durchschnittliche Anrufe pro Tag',
    'Weitere Apps auswählen',
    'Arbeitskosten <br/>manueller Download',
    'Reduzierung Spritverbrauch [%]',
    'Reduzierung Spritverbrauch [%]',
    'Durchschnittliche Wartungskosten je Fahrzeug',
    'Durchschnittliche Einsparungen Wartungskosten [%]',
    'Zeitaufwand manuelle Inspektion <br/>pro Fahrzeug pro Tag [min]',
    ' Beispieldaten eingeben',
    ' Berechnen',
    ' Rückruf anfordern',
    'Pflichtfeld!',
    'Falsche Eingabe!',
    'Click here for explanation of calculation assumptions!',
    'Dauer pro Auftragsbesprechung [min]',
    'Einsparung Zeit für Umwege<br/>pro Fahrzeug pro Monat [min]',
    'Einsparung Kilometer für Umwege<br/>pro Fahrzeug pro Monat',
    'Anrufe pro Fahrzeug pro Tag<br/>(Fahrzeugposition abfragen)',
    'Dauer pro Anruf<br/>(Fahrzeugposition abfragen) [min]',
    'Fahrzeugauslastung in Prozent<br/>(von 176 St. Max.) [%]',
    'Steigerung der Auslastung<br/>(vereinfachte Disposition) [%]',
    'Gewinn pro Lastkilometer',
    'Durchschnittsgeschwindigkeit',
    'Zeitaufwand <br/>manueller Download [min]',
    'Häufigkeit Download Digitaler Tachograph (Massendaten und Fahrerkarten) [Anzahl pro Monat]',
    'Extrakilometer in Speditionshof <br/>(für Download)',   
    'Zeitaufwaufwand <br/>manuelle Kontrollen pro Fahrzeug pro Tag [min]',
    'Arbeitskosten <br/>manuelle Kontrollen',
    'Arbeitskosten <br/>Werkstattmitarbeiter',    
    'Die App Area Monitoring bietet eine ebenso einfache wie effektive Möglichkeit der Fahrzeugüberwachung...', /* 46-line */ 
    'Gutes Flottenmanagement geht einher mit schneller, eindeutiger Kommunikation zwischen dem...', /* 47-line */ 
    'Ein Navigationssystem für Lkw muss mehr können, als den allgemein schnellsten oder kürzesten...', /* 48-line */ 
    'Die App zeigt auf einer Karte die Positionen von einem, von mehreren Fahrzeugen oder auch...', /* 49-line */ 
    'Die App Work Advanced dokumentiert den Einsatz eines Fahrzeuges. Sie dient als Fahrten - und Logbuch...', /* 50-line */ 
    'Der digitale Tachograph erfasst in Nutzfahrzeugen die Lenk-, Arbeits- und Ruhezeiten der Fahrer...', /* 51-line */ 
    'Wie hoch liegen der Kraftstoffverbrauch und der CO2-Ausstoß eines einzelnen Fahrzeuges...', /* 52-line */ 
    'Wie wirtschaftlich Trucks LKW´s unterwegs sind, hängt auch von der Person hinter dem...', /* 53-line */ 
    'Bevor ein Fahrzeug das Depot verlässt, wird es in der Regel inspiziert. Bisher mussten...' /* 54-line */ 
]

var softfacts_german = {};

softfacts_german = [
    'Erhöhte Produktivität',
    'Erhöhte',
    'Produktivität',    
    
    'Optimierte Geschäftsprozesse',    
    'Optimierte',
    'Geschäftsprozesse',
       
    'Vereinfachte Planung',
    'Vereinfachte',
    'Planung',    
    
    'Reduzierte Strafzahlungen',
    'Reduzierte',
    'Strafzahlungen',    
    
    'Entspannte Fahrer',
    'Entspannte',
    'Fahrer',
    
    'Umweltfreundliches Image',
    'Umweltfreundliches',
    'Image',
    
    'Sichere Transporte',
    'Sichere',
    'Transporte',
      
    '<font color="#0049AF">open</font><font color="#B3BABD">matics</font><br/><font style="font-size:15px;">the open telematics platform</font>'
];

var softfacts_usa = {};

softfacts_usa = [
    'increased productivity',
    'increased',
    'productivity',    
    
    'optimized business processes',    
    'optimized',
    'business processes',
       
    'simplified planning',
    'simplified',
    'planning',    
    
    'reduced penalties',
    'reduced',
    'penalties',    
    
    'relaxed drivers',
    'relaxed',
    'drivers',
    
    'green image',
    'green',
    'image',
    
    'safe transportation',
    'safe',
    'transportation',
      
    '<font color="#0049AF">open</font><font color="#B3BABD">matics</font><br/><font style="font-size:15px;">the open telematics platform</font>'
];


var sampleData = {};
sampleData = [
    /* EUROPE standart */
    [        
        /* truck < 18ton sample data */
        {id: 'amountOfVehicles', value: '100'},
        {id: 'averageConsumption', value: '26,00'},
        {id: 'averageFuelPrice', value: '1,10'},
        {id: 'averageDistancePerYear', value: '80000'},            
        {id: 'costsLogisticsManager', value: '25,00'},
        {id: 'costsDriverPerHour', value: '15,00'},
        {id: 'reducedWaitingTime', value: '10'},
        {id: 'amountOrdersPerTruckPerMonth', value: '60'},                               
        {id: 'reducedFuelConsumptionGentle', value: '2,0'},                     
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '40'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0,20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15,00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '10'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '10,00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '10,00'}
    ],
    [        
        /* truck > 18ton sample data */
        {id: 'amountOfVehicles', value: '50'},
        {id: 'averageConsumption', value: '30,00'},
        {id: 'averageFuelPrice', value: '1,10'},
        {id: 'averageDistancePerYear', value: '100000'},            
        {id: 'costsLogisticsManager', value: '25,00'},
        {id: 'costsDriverPerHour', value: '15,00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '40'},                        
        {id: 'reducedFuelConsumptionGentle', value: '2,0'},                 
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '20'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0,20'},
        {id: 'averageSpeed', value: '60'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15,00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '30'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '10,00'},        
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '10,00'}
    ],
    [
        /* mobile crane sample data */
        {id: 'amountOfVehicles', value: '500'},
        {id: 'averageConsumption', value: '34,00'},
        {id: 'averageFuelPrice', value: '1,10'},
        {id: 'averageDistancePerYear', value: '20000'},        
        {id: 'costsLogisticsManager', value: '30,00'},
        {id: 'costsDriverPerHour', value: '15,00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2,0'},                   
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0,20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15,00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8,00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11,00'}
    ],
    [
        /* mixer sample data */
        {id: 'amountOfVehicles', value: '20'},
        {id: 'averageConsumption', value: '34,00'},
        {id: 'averageFuelPrice', value: '1,10'},
        {id: 'averageDistancePerYear', value: '10000'},                
        {id: 'costsLogisticsManager', value: '30,00'},
        {id: 'costsDriverPerHour', value: '15,00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2,0'},                    
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0,20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15,00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8,00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11,00'}
    ],
    [
        /* dump truck sample data */
        {id: 'amountOfVehicles', value: '20'},
        {id: 'averageConsumption', value: '34,00'},
        {id: 'averageFuelPrice', value: '1,10'},
        {id: 'averageDistancePerYear', value: '10000'},                
        {id: 'costsLogisticsManager', value: '30,00'},
        {id: 'costsDriverPerHour', value: '15,00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2,0'},                     
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0,20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15,00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8,00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11,00'}
    ],
    [
        /* coach sample data */
        {id: 'amountOfVehicles', value: '10'},
        {id: 'averageConsumption', value: '34,00'},
        {id: 'averageFuelPrice', value: '1,10'},
        {id: 'averageDistancePerYear', value: '10000'},              
        {id: 'costsLogisticsManager', value: '30,00'},
        {id: 'costsDriverPerHour', value: '15,00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2,0'},                 
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0,20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15,00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8,00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11,00'}
    ],
    /* US standart */
    [        
        /* truck < 18ton sample data */
        {id: 'amountOfVehicles', value: '100'},
        {id: 'averageConsumption', value: '6.90'},
        {id: 'averageFuelPrice', value: '3.50'},
        {id: 'averageDistancePerYear', value: '80000'},              
        {id: 'costsLogisticsManager', value: '43.00'},
        {id: 'costsDriverPerHour', value: '34.00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '100'},
        {id: 'reducedFuelConsumptionGentle', value: '2.0'},                     
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0.20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15.00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8.00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11.00'}
    ],
    [        
        /* truck > 18ton sample data */
        {id: 'amountOfVehicles', value: '100'},
        {id: 'averageConsumption', value: '9.00'},
        {id: 'averageFuelPrice', value: '3.50'},
        {id: 'averageDistancePerYear', value: '100000'},          
        {id: 'costsLogisticsManager', value: '43.00'},
        {id: 'costsDriverPerHour', value: '34.00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2.0'},                
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0.20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15.00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8.00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11.00'}
    ],
    [
        /* mobile crane sample data */
        {id: 'amountOfVehicles', value: '500'},
        {id: 'averageConsumption', value: '34.00'},
        {id: 'averageFuelPrice', value: '1.40'},
        {id: 'averageDistancePerYear', value: '20000'},        
        {id: 'costsLogisticsManager', value: '40.00'},
        {id: 'costsDriverPerHour', value: '30.00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2.0'},                     
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0.20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15.00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8.00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11.00'}
    ],
    [
        /* mixer sample data */
        {id: 'amountOfVehicles', value: '20'},
        {id: 'averageConsumption', value: '34.00'},
        {id: 'averageFuelPrice', value: '1.40'},
        {id: 'averageDistancePerYear', value: '100000'},          
        {id: 'costsLogisticsManager', value: '40.00'},
        {id: 'costsDriverPerHour', value: '30.00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2.0'},                       
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0.20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15.00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8.00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11.00'}
    ],
    [
        /* dump truck sample data */
        {id: 'amountOfVehicles', value: '20'},
        {id: 'averageConsumption', value: '34.00'},
        {id: 'averageFuelPrice', value: '1.40'},
        {id: 'averageDistancePerYear', value: '100000'},       
        {id: 'costsLogisticsManager', value: '40.00'},
        {id: 'costsDriverPerHour', value: '30.00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2.0'},                  
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0.20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15.00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8.00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11.00'}
    ],
    [
        /* coach sample data */
        {id: 'amountOfVehicles', value: '10'},
        {id: 'averageConsumption', value: '34.00'},
        {id: 'averageFuelPrice', value: '1.40'},
        {id: 'averageDistancePerYear', value: '100000'},            
        {id: 'costsLogisticsManager', value: '40.00'},
        {id: 'costsDriverPerHour', value: '30.00'},
        {id: 'reducedWaitingTime', value: '5'},
        {id: 'amountOrdersPerTruckPerMonth', value: '50'},
        {id: 'reducedFuelConsumptionGentle', value: '2.0'},                       
        {id: 'durationPerCall', value: '2'},
        {id: 'detourTimeSaved', value: '30'},
        {id: 'detourMilesSaved', value: '15'}, 
        {id: 'callsPerVehiclePerDay', value: '1'},
        {id: 'durationPerCallV', value: '2'},
        {id: 'vehicleUtilisation', value: '80'},
        {id: 'increasmentVehicleUtilisation', value: '5'}, 
        {id: 'profitPerFreightKilometer', value: '0.20'},
        {id: 'averageSpeed', value: '50'},
        {id: 'timeManualDownload', value: '30'},
        {id: 'labourCostsForManualDownload', value: '15.00'},
        {id: 'frequencyDownload', value: '1'},
        {id: 'extraMilesToDepot', value: '15'},
        {id: 'timeManualControlsPerVehicle', value: '3'},
        {id: 'laborCostsManualControls', value: '8.00'},
        {id: 'timeManualChecks', value: '3'},
        {id: 'laborCostsWorkshopEmployees', value: '11,00'}
    ]
];

var units = {};
units = [
    /* europe standarts */
    [
        {id:'averageConsumption',value:'[l/100km]'},
        {id:'averageFuelPrice',value:'[€/l]'},
        {id:'averageDistancePerYear',value:'[km/year]'},
        {id:'costsLogisticsManager',value:'[€/h]'},
        {id:'costsDriverPerHour',value:'[€/h]'},                
        {id:'labourCostsForManualDownload',value:'[€/h]'},
        {id:'averageMaintenanceConstPerTruck',value:'(EUR/month)'},
        {id:'costWorkshopEmployees',value:'(EUR/h)'},
        {id:'detourMilesSaved',value:'[km]'},
        {id:'profitPerFreightKilometer',value:'[€/km]'},
        {id:'averageSpeed',value:'[km/h]'},
        {id:'extraMilesToDepot',value:'[km]'},
        {id:'laborCostsManualControls',value:'[€/h]'},
        {id: 'laborCostsWorkshopEmployees', value: '[€/h]'}
    ],
    /* usa standarts */
    [
        {id:'averageConsumption',value:'[mpg/100miles]'},
        {id:'averageFuelPrice',value:'[$/gal]'},
        {id:'averageDistancePerYear',value:'[mile]'},
        {id:'costsLogisticsManager',value:'[$/h]'},
        {id:'costsDriverPerHour',value:'[$/h]'},        
        {id:'vehicleCostsPerKm',value:'[$/mile]'},
        {id:'labourCostsForManualDownload',value:'[$/h]'},
        {id:'averageMaintenanceConstPerTruck',value:'[$/month]'},
        {id:'costWorkshopEmployees',value:'[$/h]'},
        {id:'detourMilesSaved',value:'[mile]'},
        {id:'profitPerFreightKilometer',value:'[$/mile]'},
        {id:'averageSpeed',value:'[mile/h]'},
        {id:'laborCostsManualControls',value:'[$/h]'},
        {id: 'laborCostsWorkshopEmployees', value: '[$/h]'}
    ]
]