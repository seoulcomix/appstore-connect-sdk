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
 * @interface AppEventLocalizationRelationshipsAppEventVideoClipsDataInner
 */
export interface AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClipsDataInner
     */
    type: AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventVideoClipsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum = typeof AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum[keyof typeof AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventVideoClipsDataInner interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventVideoClipsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON(json: any): AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    return AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventVideoClipsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON(value?: AppEventLocalizationRelationshipsAppEventVideoClipsDataInner | null): any {
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

