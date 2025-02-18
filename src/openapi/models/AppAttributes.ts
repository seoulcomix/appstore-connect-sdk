/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SubscriptionStatusUrlVersion } from './SubscriptionStatusUrlVersion';
import {
    SubscriptionStatusUrlVersionFromJSON,
    SubscriptionStatusUrlVersionFromJSONTyped,
    SubscriptionStatusUrlVersionToJSON,
} from './SubscriptionStatusUrlVersion';

/**
 * 
 * @export
 * @interface AppAttributes
 */
export interface AppAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    bundleId?: string;
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    primaryLocale?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppAttributes
     */
    isOrEverWasMadeForKids?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    subscriptionStatusUrl?: string;
    /**
     * 
     * @type {SubscriptionStatusUrlVersion}
     * @memberof AppAttributes
     */
    subscriptionStatusUrlVersion?: SubscriptionStatusUrlVersion;
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    subscriptionStatusUrlForSandbox?: string;
    /**
     * 
     * @type {SubscriptionStatusUrlVersion}
     * @memberof AppAttributes
     */
    subscriptionStatusUrlVersionForSandbox?: SubscriptionStatusUrlVersion;
    /**
     * 
     * @type {string}
     * @memberof AppAttributes
     */
    contentRightsDeclaration?: AppAttributesContentRightsDeclarationEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AppAttributes
     */
    streamlinedPurchasingEnabled?: boolean;
}


/**
 * @export
 */
export const AppAttributesContentRightsDeclarationEnum = {
    DoesNotUseThirdPartyContent: 'DOES_NOT_USE_THIRD_PARTY_CONTENT',
    UsesThirdPartyContent: 'USES_THIRD_PARTY_CONTENT'
} as const;
export type AppAttributesContentRightsDeclarationEnum = typeof AppAttributesContentRightsDeclarationEnum[keyof typeof AppAttributesContentRightsDeclarationEnum];


/**
 * Check if a given object implements the AppAttributes interface.
 */
export function instanceOfAppAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppAttributesFromJSON(json: any): AppAttributes {
    return AppAttributesFromJSONTyped(json, false);
}

export function AppAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'bundleId': !exists(json, 'bundleId') ? undefined : json['bundleId'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'primaryLocale': !exists(json, 'primaryLocale') ? undefined : json['primaryLocale'],
        'isOrEverWasMadeForKids': !exists(json, 'isOrEverWasMadeForKids') ? undefined : json['isOrEverWasMadeForKids'],
        'subscriptionStatusUrl': !exists(json, 'subscriptionStatusUrl') ? undefined : json['subscriptionStatusUrl'],
        'subscriptionStatusUrlVersion': !exists(json, 'subscriptionStatusUrlVersion') ? undefined : SubscriptionStatusUrlVersionFromJSON(json['subscriptionStatusUrlVersion']),
        'subscriptionStatusUrlForSandbox': !exists(json, 'subscriptionStatusUrlForSandbox') ? undefined : json['subscriptionStatusUrlForSandbox'],
        'subscriptionStatusUrlVersionForSandbox': !exists(json, 'subscriptionStatusUrlVersionForSandbox') ? undefined : SubscriptionStatusUrlVersionFromJSON(json['subscriptionStatusUrlVersionForSandbox']),
        'contentRightsDeclaration': !exists(json, 'contentRightsDeclaration') ? undefined : json['contentRightsDeclaration'],
        'streamlinedPurchasingEnabled': !exists(json, 'streamlinedPurchasingEnabled') ? undefined : json['streamlinedPurchasingEnabled'],
    };
}

export function AppAttributesToJSON(value?: AppAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'bundleId': value.bundleId,
        'sku': value.sku,
        'primaryLocale': value.primaryLocale,
        'isOrEverWasMadeForKids': value.isOrEverWasMadeForKids,
        'subscriptionStatusUrl': value.subscriptionStatusUrl,
        'subscriptionStatusUrlVersion': SubscriptionStatusUrlVersionToJSON(value.subscriptionStatusUrlVersion),
        'subscriptionStatusUrlForSandbox': value.subscriptionStatusUrlForSandbox,
        'subscriptionStatusUrlVersionForSandbox': SubscriptionStatusUrlVersionToJSON(value.subscriptionStatusUrlVersionForSandbox),
        'contentRightsDeclaration': value.contentRightsDeclaration,
        'streamlinedPurchasingEnabled': value.streamlinedPurchasingEnabled,
    };
}

