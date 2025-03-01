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
import type { AppCategoryRelationshipsParent } from './AppCategoryRelationshipsParent';
import {
    AppCategoryRelationshipsParentFromJSON,
    AppCategoryRelationshipsParentFromJSONTyped,
    AppCategoryRelationshipsParentToJSON,
} from './AppCategoryRelationshipsParent';
import type { AppCategoryRelationshipsSubcategories } from './AppCategoryRelationshipsSubcategories';
import {
    AppCategoryRelationshipsSubcategoriesFromJSON,
    AppCategoryRelationshipsSubcategoriesFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesToJSON,
} from './AppCategoryRelationshipsSubcategories';

/**
 * 
 * @export
 * @interface AppCategoryRelationships
 */
export interface AppCategoryRelationships {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategories}
     * @memberof AppCategoryRelationships
     */
    subcategories?: AppCategoryRelationshipsSubcategories;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppCategoryRelationships
     */
    parent?: AppCategoryRelationshipsParent;
}

/**
 * Check if a given object implements the AppCategoryRelationships interface.
 */
export function instanceOfAppCategoryRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCategoryRelationshipsFromJSON(json: any): AppCategoryRelationships {
    return AppCategoryRelationshipsFromJSONTyped(json, false);
}

export function AppCategoryRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subcategories': !exists(json, 'subcategories') ? undefined : AppCategoryRelationshipsSubcategoriesFromJSON(json['subcategories']),
        'parent': !exists(json, 'parent') ? undefined : AppCategoryRelationshipsParentFromJSON(json['parent']),
    };
}

export function AppCategoryRelationshipsToJSON(value?: AppCategoryRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subcategories': AppCategoryRelationshipsSubcategoriesToJSON(value.subcategories),
        'parent': AppCategoryRelationshipsParentToJSON(value.parent),
    };
}

