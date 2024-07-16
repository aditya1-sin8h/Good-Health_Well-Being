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

    // Construct the payload
    const payload = {
        "input_data": [{
            "fields": ["gender", "age","hypertension","heart_disease","smoking_history","bmi","HbA1c_level","blood_glucose_level"],  // Add all input fields
            "values": [[input1, input2,input3,input4,input5,input6,input7,input8]]    // Add all input values
        }]
    };

    // Replace with your actual endpoint URL and API key
    const endpointUrl = 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/85dec546-4e1d-49be-88b3-a4966a52dcca/predictions?version=2021-05-01';
    const apiKey = 'zt17cgsdRzbCBJHmpGrfFn-0WMxEn5CX_yVywgp58qpF';

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