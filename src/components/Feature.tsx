import Card from "./Card";

const Feature = () => {
    return (
        <div>
            <h1>Explore the Technologies</h1>
            <p>Pick one technology per category to build your ideal stack</p>
            <div className="grid grid-cols-3 gap-3">
                <Card></Card>
                 <Card></Card>
                  <Card></Card>
                   <Card></Card>
                 <Card></Card>
                  <Card></Card>
                   <Card></Card>
                 <Card></Card>
                  <Card></Card>
                   <Card></Card>
                 <Card></Card>
                  <Card></Card>
            </div>
        </div>
    );
};

export default Feature;