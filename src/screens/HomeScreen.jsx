import { Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../components/MyCard";

const HomeScreen = () => {
  return (
    <MyCard>
      <MyCardHeader>cart title</MyCardHeader>
      <MyCardBody>
        <div>
          <button className="btn btn-primary">Hello theres</button>
          <Button variant="primary">Hello threre</Button>
        </div>
      </MyCardBody>
    </MyCard>
  );
};
export default HomeScreen;
