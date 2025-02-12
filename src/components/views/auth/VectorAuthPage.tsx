/*
Copyright 2019, 2020 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { CSSProperties } from 'react';
import * as sdk from 'matrix-react-sdk/src/index';
import SdkConfig from 'matrix-react-sdk/src/SdkConfig';

export default class VectorAuthPage extends React.PureComponent {
    static replaces = 'AuthPage';

    static welcomeBackgroundUrl;

    // cache the url as a static to prevent it changing without refreshing
    static getWelcomeBackgroundUrl() {
        if (VectorAuthPage.welcomeBackgroundUrl) return VectorAuthPage.welcomeBackgroundUrl;

        const brandingConfig = SdkConfig.get().branding;
        VectorAuthPage.welcomeBackgroundUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85";
        if (brandingConfig && brandingConfig.welcomeBackgroundUrl) {
            if (Array.isArray(brandingConfig.welcomeBackgroundUrl)) {
                const index = Math.floor(Math.random() * brandingConfig.welcomeBackgroundUrl.length);
                VectorAuthPage.welcomeBackgroundUrl = brandingConfig.welcomeBackgroundUrl[index];
            } else {
                VectorAuthPage.welcomeBackgroundUrl = brandingConfig.welcomeBackgroundUrl;
            }
        }

        return VectorAuthPage.welcomeBackgroundUrl;
    }

    render() {
        const AuthFooter = sdk.getComponent('auth.AuthFooter');

        const pageStyle = {
            background: `center/cover fixed url(${VectorAuthPage.getWelcomeBackgroundUrl()})`,
        };

        const modalStyle: CSSProperties = {
            position: 'relative',
            background: 'initial',
        };

        const blurStyle: CSSProperties = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            filter: 'blur(40px)',
            background: pageStyle.background,
        };

        const modalContentStyle: CSSProperties = {
            display: 'flex',
            zIndex: 1,
            background: 'rgba(255, 255, 255, 0.59)',
            borderRadius: '8px',
        };

        return (
            <div className="mx_AuthPage" style={pageStyle}>
                <div className="mx_AuthPage_modal" style={modalStyle}>
                    <div className="mx_AuthPage_modalBlur" style={blurStyle} />
                    <div className="mx_AuthPage_modalContent" style={modalContentStyle}>
                        { this.props.children }
                    </div>
                </div>
                <AuthFooter />
            </div>
        );
    }
}

// backgroundImage:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85)
// ;--mceColumn-backgroundImage-phone:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=480);--mceColumn-backgroundImage-phone-2x:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=480&amp;dpr=2);--mceColumn-backgroundImage-tablet:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=860);--mceColumn-backgroundImage-tablet-2x:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=860&amp;dpr=2);--mceColumn-backgroundImage-laptop:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=1200);--mceColumn-backgroundImage-laptop-2x:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=1200&amp;dpr=2);--mceColumn-backgroundImage-desktop:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=1800);--mceColumn-backgroundImage-desktop-2x:url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=MnwxNDEzNDF8MHwxfHNlYXJjaHwyMXx8c2VjdXJpdHl8ZW58MHx8fHwxNjM3MjU0MDA4&amp;ixlib=rb-1.2.1&amp;q=85&amp;w=1800&amp;dpr=2)"
