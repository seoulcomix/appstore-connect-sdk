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
/**
 * 
 * @export
 * @interface MarketplaceWebhookCreateRequestDataAttributes
 */
export interface MarketplaceWebhookCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhookCreateRequestDataAttributes
     */
    endpointUrl: string;
    /**
     * 
     * @type {string}
     * @memberof MarketplaceWebhookCreateRequestDataAttributes
     */
    secret: string;
}

/**
 * Check if a given object implements the MarketplaceWebhookCreateRequestDataAttributes interface.
 */
export function instanceOfMarketplaceWebhookCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "endpointUrl" in value;
    isInstance = isInstance && "secret" in value;

    return isInstance;
}

export function MarketplaceWebhookCreateRequestDataAttributesFromJSON(json: any): MarketplaceWebhookCreateRequestDataAttributes {
    return MarketplaceWebhookCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function MarketplaceWebhookCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endpointUrl': json['endpointUrl'],
        'secret': json['secret'],
    };
}

export function MarketplaceWebhookCreateRequestDataAttributesToJSON(value?: MarketplaceWebhookCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endpointUrl': value.endpointUrl,
        'secret': value.secret,
    };
}

