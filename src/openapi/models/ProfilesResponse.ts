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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
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
 * @interface ProfilesResponse
 */
export interface ProfilesResponse {
    /**
     * 
     * @type {Array<Profile>}
     * @memberof ProfilesResponse
     */
    data: Array<Profile>;
    /**
     * 
     * @type {Array<ProfilesResponseIncludedInner>}
     * @memberof ProfilesResponse
     */
    included?: Array<ProfilesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof ProfilesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof ProfilesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ProfilesResponse interface.
 */
export function instanceOfProfilesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ProfilesResponseFromJSON(json: any): ProfilesResponse {
    return ProfilesResponseFromJSONTyped(json, false);
}

export function ProfilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ProfileFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ProfilesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function ProfilesResponseToJSON(value?: ProfilesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ProfileToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ProfilesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

