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
import type { AppRelationshipsPreReleaseVersionsDataInner } from './AppRelationshipsPreReleaseVersionsDataInner';
import {
    AppRelationshipsPreReleaseVersionsDataInnerFromJSON,
    AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped,
    AppRelationshipsPreReleaseVersionsDataInnerToJSON,
} from './AppRelationshipsPreReleaseVersionsDataInner';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface BuildRelationshipsPreReleaseVersion
 */
export interface BuildRelationshipsPreReleaseVersion {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildRelationshipsPreReleaseVersion
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsPreReleaseVersionsDataInner}
     * @memberof BuildRelationshipsPreReleaseVersion
     */
    data?: AppRelationshipsPreReleaseVersionsDataInner;
}

/**
 * Check if a given object implements the BuildRelationshipsPreReleaseVersion interface.
 */
export function instanceOfBuildRelationshipsPreReleaseVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsPreReleaseVersionFromJSON(json: any): BuildRelationshipsPreReleaseVersion {
    return BuildRelationshipsPreReleaseVersionFromJSONTyped(json, false);
}

export function BuildRelationshipsPreReleaseVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsPreReleaseVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppRelationshipsPreReleaseVersionsDataInnerFromJSON(json['data']),
    };
}

export function BuildRelationshipsPreReleaseVersionToJSON(value?: BuildRelationshipsPreReleaseVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppRelationshipsPreReleaseVersionsDataInnerToJSON(value.data),
    };
}

