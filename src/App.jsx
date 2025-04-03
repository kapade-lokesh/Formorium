import clsx from "clsx";
import { Button, Checkbox, Input } from "./components";
function App() {
  return (
    <>
      <div>
        <Button>Button</Button>

        <Button variant="outlined" color="red">
          Button
        </Button>

        <div className="flex gap-40">
          <div className="">
            <div>
              <Checkbox />
            </div>
          </div>
          <div>
            <Input
              type="text"
              variant="outline"
              color="default"
              label="Password"
              className="mt-10"
              size="sm"
            />
            <Input
              type="password"
              variant="outline"
              color="red"
              label="Password"
              className="mt-10"
              size="md"
            />
            <Input
              type="email"
              variant="outline"
              color="blue"
              label="Password"
              className="mt-10"
              size="lg"
            />
            <Input
              type="date"
              variant="outline"
              color="green"
              label="Password"
              className="mt-10"
            />
            <Input
              type="color"
              variant="outline"
              color="yellow"
              label="Password"
              className="mt-10"
            />
            <Input
              type="file"
              variant="outline"
              color="purple"
              label="Password"
              className="mt-10"
            />
          </div>
          {/* <div>
            <Input
              type="password"
              variant="standard"
              color="default"
              label="Password"
              className="mt-10"
              size="sm"
            />
            <Input
              type="password"
              variant="standard"
              color="red"
              label="Password"
              className="mt-10"
              size="md"
            />
            <Input
              type="password"
              variant="standard"
              color="blue"
              label="Password"
              className="mt-10"
              size="lg"
            />
            <Input
              type="password"
              variant="standard"
              color="green"
              label="Password"
              className="mt-10"
            />
            <Input
              type="password"
              variant="standard"
              color="yellow"
              label="Password"
              className="mt-10"
            />
            <Input
              type="password"
              variant="standard"
              color="purple"
              label="Password"
              className="mt-10"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
