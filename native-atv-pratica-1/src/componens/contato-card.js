import { View, Text, FlatList, Image } from "react-native";

var cardStyles = require("./styles");

export default function ContatoCard({ data }) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={cardStyles.card}>
            <Image
              style={cardStyles.imageCard}
              source={{ uri: "https://picsum.photos/300/300" }}
            />
            <Text style={cardStyles.cardText}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}
