import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { bgHeader } from "../../global.styles";

class Toolbar extends React.Component {
    onActionSelected = (position) => {
        const { navigateTo } = this.props;

        if (position === 0) {
            navigateTo('About');
        } else if (position === 1) {
            navigateTo('Credits');
        }
    };

    render() {
        const { showMenu, goBack, actualRouteName } = this.props;

        return (
            <View style={styles.header}>
                <Icon.ToolbarAndroid
                    navIconName={actualRouteName === 'LeaderBoard' ? 'menu' : 'arrow-left'}
                    titleColor="#fff"
                    title={actualRouteName}
                    onIconClicked={actualRouteName === 'LeaderBoard' ? showMenu : goBack }
                    overflowIconName="dots-vertical"
                    style={{ height: 56 }}
                    actions={[
                        {title: 'About', show: 'never', iconName: 'information-outline'},
                        {title: 'Credits', show: 'never', iconName: 'account-circle'},
                    ]}
                    onActionSelected={this.onActionSelected}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: bgHeader,
        height: 80,
        paddingTop: 24,
    },
});

export default Toolbar;
