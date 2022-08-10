import { ScrollView, Text } from "react-native";
import { Card, Avatar, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";
import * as Animatable from "react-native-animatable";

const AboutScreen = () => {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card>
          <Card.Title>About Us</Card.Title>
          <Card.Divider />
          <Text style={{ margin: 10 }}>
            We are a family-owned bakery recently featured on the hit show
            "Shark Tank". Decadent's humble beginnings started in 1990, in a
            small kitchen in Portsmouth, Virginia, filled with family, love and
            great family recipes. With customers like you, we can continue our
            tradition of great food and smiles around the dinner table. Don't
            forget to share!
          </Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default AboutScreen;
