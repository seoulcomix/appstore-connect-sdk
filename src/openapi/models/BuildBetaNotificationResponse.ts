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
import type { BuildBetaNotification } from './BuildBetaNotification';
import {
    BuildBetaNotificationFromJSON,
    BuildBetaNotificationFromJSONTyped,
    BuildBetaNotificationToJSON,
} from './BuildBetaNotification';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BuildBetaNotificationResponse
 */
export interface BuildBetaNotificationResponse {
    /**
     * 
     * @type {BuildBetaNotification}
     * @memberof BuildBetaNotificationResponse
     */
    data: BuildBetaNotification;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BuildBetaNotificationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BuildBetaNotificationResponse interface.
 */
export function instanceOfBuildBetaNotificationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BuildBetaNotificationResponseFromJSON(json: any): BuildBetaNotificationResponse {
    return BuildBetaNotificationResponseFromJSONTyped(json, false);
}

export function BuildBetaNotificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaNotificationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BuildBetaNotificationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BuildBetaNotificationResponseToJSON(value?: BuildBetaNotificationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BuildBetaNotificationToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

