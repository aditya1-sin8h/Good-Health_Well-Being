document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the input values
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;
    const input6 = document.getElementById('input6').value;
    const input7 = document.getElementById('input7').value;
    const input8 = document.getElementById('input8').value;
    const input9 = document.getElementById('input9').value;
    const input10 = document.getElementById('input10').value;
    const input11 = document.getElementById('input11').value;
    const input12 = document.getElementById('input12').value;
    const input13 = document.getElementById('input13').value;


    // Construct the payload
    const payload = {
        "input_data": [{
            "fields": ["age", "sex","chest pain type","resting blood pressure","serum cholestoral","fasting blood sugar","resting electrocardiographic results","max heart rate","exercise induced angina","oldpeak","ST segment","major vessels","thal"],  // Add all input fields
            "values": [[input1, input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13]]    // Add all input values
        }]
    };

    // Replace with your actual endpoint URL and API key
    const endpointUrl = 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/0ab4142b-2854-43e3-9eaa-781089c267c5/predictions?version=2021-05-01';
    const apiKey = 'Yuc3v4QQpmYenxy42VsuTE1th3PkWwmTb_fXQiq4Shid';

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the model
        const prediction = data.predictions[0].values[0][0];
        document.getElementById('result').innerText = `Prediction: ${prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error fetching prediction';
    });
});