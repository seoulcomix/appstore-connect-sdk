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
 * @interface BuildBundleRelationshipsAppClipDomainCacheStatusData
 */
export interface BuildBundleRelationshipsAppClipDomainCacheStatusData {
    /**
     * 
     * @type {string}
     * @memberof BuildBundleRelationshipsAppClipDomainCacheStatusData
     */
    type: BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleRelationshipsAppClipDomainCacheStatusData
     */
    id: string;
}


/**
 * @export
 */
export const BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum = {
    AppClipDomainStatuses: 'appClipDomainStatuses'
} as const;
export type BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum = typeof BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum[keyof typeof BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum];


/**
 * Check if a given object implements the BuildBundleRelationshipsAppClipDomainCacheStatusData interface.
 */
export function instanceOfBuildBundleRelationshipsAppClipDomainCacheStatusData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataFromJSON(json: any): BuildBundleRelationshipsAppClipDomainCacheStatusData {
    return BuildBundleRelationshipsAppClipDomainCacheStatusDataFromJSONTyped(json, false);
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleRelationshipsAppClipDomainCacheStatusData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataToJSON(value?: BuildBundleRelationshipsAppClipDomainCacheStatusData | null): any {
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

