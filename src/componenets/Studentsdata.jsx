import "./StudentData.css";

export default function Studentsdata(props) {
    let Name = ["ram", "rishav", "manas", "vivek", "govind", "raja", "amritesh","tinku"];
    let Student = ["Ram", "Rishav", "Manas", "Vivek", "Govind", "Raja", "Amritesh","Tinku"];
    let Age = ["20", "19", "20", "20", "18", "18","20","23"];
    let Phone = ["01010029209", "0101082837", "0282736783", "0883737639", "0876356786", "0836536736", "09836537636","087655676546"];
    let image = ["./Image/Ram.jpg", "./Image/Rishav.jpeg", "./Image/Manas.jpeg", "./Image/Vivek.jpeg", "./Image/Govind.jpeg", "./Image/Raja.jpeg", "./Image/Amritesh.jpeg","./Image/Tinku.webp"];
    if (props.name.trim() === "") {
        return (
            <>
                <tr>
                    <img src={require(`./Image/Enter.jpeg`)} alt="Image1" height="500px" width="400px" />
                </tr>
            </>
        )
    }
    let ind = -1;
    for (let i = 0; i < Student.length; i++) {
        if (Name[i].includes(props.name.toLowerCase().trim())){
            ind = i;
            break;
        }
    }
    if (ind === -1) {
        return (
            <>
                <tr>
                    <img src={require(`./Image/Notfound.jpeg`)} alt="Image1" height="500px" width="400px" />
                </tr>
            </>
        )
    }
    else {
        return (
            <>
                <tr>
                    <td>
                        <img src={require(`${image[ind]}`)} alt="Image1" height="500px" width="400px" />
                    </td>
                    <b>
                        Name : {Student[ind]}
                        <br />
                        Age : {Age[ind]}
                        <br />
                        Phone : {Phone[ind]}
                    </b>
                </tr>
            </>
        )
    }
}
