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
 * @interface AppRelationshipsBetaAppLocalizationsDataInner
 */
export interface AppRelationshipsBetaAppLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsBetaAppLocalizationsDataInner
     */
    type: AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsBetaAppLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum = {
    BetaAppLocalizations: 'betaAppLocalizations'
} as const;
export type AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum = typeof AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum[keyof typeof AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsBetaAppLocalizationsDataInner interface.
 */
export function instanceOfAppRelationshipsBetaAppLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsBetaAppLocalizationsDataInnerFromJSON(json: any): AppRelationshipsBetaAppLocalizationsDataInner {
    return AppRelationshipsBetaAppLocalizationsDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsBetaAppLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsBetaAppLocalizationsDataInnerToJSON(value?: AppRelationshipsBetaAppLocalizationsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

