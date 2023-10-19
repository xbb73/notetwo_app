import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
      <Heading level={4}>xavier spirit week</Heading>
      <Image src={'  https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3ohs7HqwyUscSwZz4A%2Fgiphy.gif&f=1&nofb=1&ipt=4a6bbd92ee98755c572e2384ced471f7ad4339cc79352e0d2afb6834a379395b&ipo=images'} width={240} className="App-logo" alt="logo" /><br/>
        <Image src={logo} width={240} className="App-logo" alt="logo" /><br/>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2F3ov9k4igEos0U58OWs%2Fgiphy.gif&f=1&nofb=1&ipt=0d3739f90b9d0dd8debce74c2b06a44eedb899755519731d38b2c5675777cfc3&ipo=images" width="512" alt="fun"/>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);