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
 * @interface AppInfoRelationshipsAppInfoLocalizationsDataInner
 */
export interface AppInfoRelationshipsAppInfoLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppInfoRelationshipsAppInfoLocalizationsDataInner
     */
    type: AppInfoRelationshipsAppInfoLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoRelationshipsAppInfoLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppInfoRelationshipsAppInfoLocalizationsDataInnerTypeEnum = {
    AppInfoLocalizations: 'appInfoLocalizations'
} as const;
export type AppInfoRelationshipsAppInfoLocalizationsDataInnerTypeEnum = typeof AppInfoRelationshipsAppInfoLocalizationsDataInnerTypeEnum[keyof typeof AppInfoRelationshipsAppInfoLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppInfoRelationshipsAppInfoLocalizationsDataInner interface.
 */
export function instanceOfAppInfoRelationshipsAppInfoLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppInfoRelationshipsAppInfoLocalizationsDataInnerFromJSON(json: any): AppInfoRelationshipsAppInfoLocalizationsDataInner {
    return AppInfoRelationshipsAppInfoLocalizationsDataInnerFromJSONTyped(json, false);
}

export function AppInfoRelationshipsAppInfoLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoRelationshipsAppInfoLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppInfoRelationshipsAppInfoLocalizationsDataInnerToJSON(value?: AppInfoRelationshipsAppInfoLocalizationsDataInner | null): any {
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

