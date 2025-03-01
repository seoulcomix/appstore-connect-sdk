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
import type { AppCategory } from './AppCategory';
import {
    AppCategoryFromJSON,
    AppCategoryFromJSONTyped,
    AppCategoryToJSON,
} from './AppCategory';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppCategoryWithoutIncludesResponse
 */
export interface AppCategoryWithoutIncludesResponse {
    /**
     * 
     * @type {AppCategory}
     * @memberof AppCategoryWithoutIncludesResponse
     */
    data: AppCategory;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCategoryWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCategoryWithoutIncludesResponse interface.
 */
export function instanceOfAppCategoryWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCategoryWithoutIncludesResponseFromJSON(json: any): AppCategoryWithoutIncludesResponse {
    return AppCategoryWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppCategoryWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCategoryFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCategoryWithoutIncludesResponseToJSON(value?: AppCategoryWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCategoryToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

