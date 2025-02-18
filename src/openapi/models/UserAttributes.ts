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
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';

/**
 * 
 * @export
 * @interface UserAttributes
 */
export interface UserAttributes {
    /**
     * 
     * @type {string}
     * @memberof UserAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAttributes
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAttributes
     */
    lastName?: string;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof UserAttributes
     */
    roles?: Array<UserRole>;
    /**
     * 
     * @type {boolean}
     * @memberof UserAttributes
     */
    allAppsVisible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserAttributes
     */
    provisioningAllowed?: boolean;
}

/**
 * Check if a given object implements the UserAttributes interface.
 */
export function instanceOfUserAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserAttributesFromJSON(json: any): UserAttributes {
    return UserAttributesFromJSONTyped(json, false);
}

export function UserAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(UserRoleFromJSON)),
        'allAppsVisible': !exists(json, 'allAppsVisible') ? undefined : json['allAppsVisible'],
        'provisioningAllowed': !exists(json, 'provisioningAllowed') ? undefined : json['provisioningAllowed'],
    };
}

export function UserAttributesToJSON(value?: UserAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(UserRoleToJSON)),
        'allAppsVisible': value.allAppsVisible,
        'provisioningAllowed': value.provisioningAllowed,
    };
}

