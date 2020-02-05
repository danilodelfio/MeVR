import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-360';
import GazeButton from "react-360-gaze-button";

class SimpleButton extends React.Component {
  state = {
    gazed: false
  };

  setGazed = () => {
    this.setState({ gazed: true });
  };

  render() {
    const { gazed } = this.state;
    return(
      <View>
        <GazeButton
          duration={3000}
          onClick={this.setGazed}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed ? "You have gazed me" : isGazed ? remainingTime : "Gaze me"}
              </Text>
            </View>
          )}
        />
      </View>
    )
  }
}

class PostItComponent extends React.Component {

  render() {
    return (
      <View style={styles.postIt}>
        <Text style={styles.title}>
        To DO
        </Text>
        <Text style={styles.body}>
        Team Leading, Software Architect, Java, Spring Boot, Node.js.
        </Text>
        <SimpleButton />
      </View>
    ); 
  }
};

const PostIt = props => {
  return (
    <View style={styles.panel}>
      <PostItComponent></PostItComponent>
      <PostItComponent></PostItComponent>
      <PostItComponent></PostItComponent>
      <PostItComponent></PostItComponent>
      <PostItComponent></PostItComponent>
      <PostItComponent></PostItComponent>
    </View>
  );
};
/**
 * 
Valid style props: [
  "alignContent",
  "alignItems",
  "alignSelf",
  "animation",
  "aspectRatio",
  "backfaceVisibility",
  "backgroundColor",
  "borderBottomColor",
  "borderBottomEndRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStartRadius",
  "borderBottomWidth",
  "borderColor",
  "borderEndColor",
  "borderEndWidth",
  "borderLeftColor",
  "borderLeftWidth",
  "borderRadius",
  "borderRightColor",
  "borderRightWidth",
  "borderStartColor",
  "borderStartWidth",
  "borderStyle",
  "borderTopColor",
  "borderTopEndRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStartRadius",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "color",
  "direction",
  "display",
  "elevation",
  "end",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "gradientAngle",
  "gradientColorA",
  "gradientColorB",
  "height",
  "includeFontPadding",
  "justifyContent",
  "layoutOrigin",
  "left",
  "letterSpacing",
  "lineHeight",
  "margin",
  "marginBottom",
  "marginEnd",
  "marginHorizontal",
  "marginLeft",
  "marginRight",
  "marginStart",
  "marginTop",
  "marginVertical",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "opacity",
  "overflow",
  "overlayColor",
  "padding",
  "paddingBottom",
  "paddingEnd",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingStart",
  "paddingTop",
  "paddingVertical",
  "position",
  "renderGroup",
  "resizeMode",
  "right",
  "rotation",
  "scaleX",
  "scaleY",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "start",
  "textAlign",
  "textAlignVertical",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "tintColor",
  "top",
  "transform",
  "transformMatrix",
  "translateX",
  "translateY",
  "width",
  "writingDirection",
  "zIndex"
]
 */
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  postIt: {
    padding: 20,
    backgroundColor: '#fcba03',
    width: 200,
    height:200
  },
  title: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000'
  },
  body: {
    fontSize: 20,
    color: '#000000'
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  }
});

export default PostIt;