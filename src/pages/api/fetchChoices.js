export default function fetchChoices(req, res){
    if(req.method === 'GET'){
        res.status(200).json(choices);
    }else if (req.method === 'POST'){
        const data = req.body.choices;
        const newData = {
            id: Date.now(),
            text: choices
        };
        choices.push(newData);
        res.status(201).json(newData);
    }
}