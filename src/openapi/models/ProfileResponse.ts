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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';
import type { ProfilesResponseIncludedInner } from './ProfilesResponseIncludedInner';
import {
    ProfilesResponseIncludedInnerFromJSON,
    ProfilesResponseIncludedInnerFromJSONTyped,
    ProfilesResponseIncludedInnerToJSON,
} from './ProfilesResponseIncludedInner';

/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {Profile}
     * @memberof ProfileResponse
     */
    data: Profile;
    /**
     * 
     * @type {Array<ProfilesResponseIncludedInner>}
     * @memberof ProfileResponse
     */
    included?: Array<ProfilesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ProfileResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ProfileResponse interface.
 */
export function instanceOfProfileResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return ProfileResponseFromJSONTyped(json, false);
}

export function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ProfileFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ProfilesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ProfileResponseToJSON(value?: ProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ProfileToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ProfilesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

