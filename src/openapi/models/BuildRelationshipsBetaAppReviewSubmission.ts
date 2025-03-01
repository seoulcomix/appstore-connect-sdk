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
import type { BuildRelationshipsBetaAppReviewSubmissionData } from './BuildRelationshipsBetaAppReviewSubmissionData';
import {
    BuildRelationshipsBetaAppReviewSubmissionDataFromJSON,
    BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped,
    BuildRelationshipsBetaAppReviewSubmissionDataToJSON,
} from './BuildRelationshipsBetaAppReviewSubmissionData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface BuildRelationshipsBetaAppReviewSubmission
 */
export interface BuildRelationshipsBetaAppReviewSubmission {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildRelationshipsBetaAppReviewSubmission
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {BuildRelationshipsBetaAppReviewSubmissionData}
     * @memberof BuildRelationshipsBetaAppReviewSubmission
     */
    data?: BuildRelationshipsBetaAppReviewSubmissionData;
}

/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmission interface.
 */
export function instanceOfBuildRelationshipsBetaAppReviewSubmission(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsBetaAppReviewSubmissionFromJSON(json: any): BuildRelationshipsBetaAppReviewSubmission {
    return BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaAppReviewSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : BuildRelationshipsBetaAppReviewSubmissionDataFromJSON(json['data']),
    };
}

export function BuildRelationshipsBetaAppReviewSubmissionToJSON(value?: BuildRelationshipsBetaAppReviewSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': BuildRelationshipsBetaAppReviewSubmissionDataToJSON(value.data),
    };
}

