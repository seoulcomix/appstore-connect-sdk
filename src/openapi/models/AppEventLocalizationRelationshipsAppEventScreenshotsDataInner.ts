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
 * @interface AppEventLocalizationRelationshipsAppEventScreenshotsDataInner
 */
export interface AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventScreenshotsDataInner
     */
    type: AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventScreenshotsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum = {
    AppEventScreenshots: 'appEventScreenshots'
} as const;
export type AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum = typeof AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum[keyof typeof AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventScreenshotsDataInner interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventScreenshotsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerFromJSON(json: any): AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    return AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventScreenshotsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEventLocalizationRelationshipsAppEventScreenshotsDataInnerToJSON(value?: AppEventLocalizationRelationshipsAppEventScreenshotsDataInner | null): any {
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

