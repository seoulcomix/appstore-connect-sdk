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
import type { AppRelationshipsBetaGroupsDataInner } from './AppRelationshipsBetaGroupsDataInner';
import {
    AppRelationshipsBetaGroupsDataInnerFromJSON,
    AppRelationshipsBetaGroupsDataInnerFromJSONTyped,
    AppRelationshipsBetaGroupsDataInnerToJSON,
} from './AppRelationshipsBetaGroupsDataInner';

/**
 * 
 * @export
 * @interface BuildBetaGroupsLinkagesRequest
 */
export interface BuildBetaGroupsLinkagesRequest {
    /**
     * 
     * @type {Array<AppRelationshipsBetaGroupsDataInner>}
     * @memberof BuildBetaGroupsLinkagesRequest
     */
    data: Array<AppRelationshipsBetaGroupsDataInner>;
}

/**
 * Check if a given object implements the BuildBetaGroupsLinkagesRequest interface.
 */
export function instanceOfBuildBetaGroupsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BuildBetaGroupsLinkagesRequestFromJSON(json: any): BuildBetaGroupsLinkagesRequest {
    return BuildBetaGroupsLinkagesRequestFromJSONTyped(json, false);
}

export function BuildBetaGroupsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaGroupsLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppRelationshipsBetaGroupsDataInnerFromJSON)),
    };
}

export function BuildBetaGroupsLinkagesRequestToJSON(value?: BuildBetaGroupsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppRelationshipsBetaGroupsDataInnerToJSON)),
    };
}

