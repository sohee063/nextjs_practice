import axios from "axios";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function login() {
  const router = useRouter();

  function login() {
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        router.push("/admin");
      }
    });
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>ID</label>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Button type="submit" onClick={login}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
