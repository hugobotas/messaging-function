const functions= require('@google-cloud/functions-framework');

functions.cloudEvent('helloCloudEvents', (cloudevent) => {
    console.log(cloudevent.specversion);
    console.log(cloudevent.type);
    console.log(cloudevent.source);
    console.log(cloudevent.subject);
    console.log(cloudevent.id);
    console.log(cloudevent.time);
    console.log(cloudevent.datacontenttype);
});