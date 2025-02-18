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
import type { CiBuildRunCreateRequestDataRelationshipsBuildRun } from './CiBuildRunCreateRequestDataRelationshipsBuildRun';
import {
    CiBuildRunCreateRequestDataRelationshipsBuildRunFromJSON,
    CiBuildRunCreateRequestDataRelationshipsBuildRunFromJSONTyped,
    CiBuildRunCreateRequestDataRelationshipsBuildRunToJSON,
} from './CiBuildRunCreateRequestDataRelationshipsBuildRun';
import type { CiBuildRunRelationshipsPullRequest } from './CiBuildRunRelationshipsPullRequest';
import {
    CiBuildRunRelationshipsPullRequestFromJSON,
    CiBuildRunRelationshipsPullRequestFromJSONTyped,
    CiBuildRunRelationshipsPullRequestToJSON,
} from './CiBuildRunRelationshipsPullRequest';
import type { CiBuildRunRelationshipsSourceBranchOrTag } from './CiBuildRunRelationshipsSourceBranchOrTag';
import {
    CiBuildRunRelationshipsSourceBranchOrTagFromJSON,
    CiBuildRunRelationshipsSourceBranchOrTagFromJSONTyped,
    CiBuildRunRelationshipsSourceBranchOrTagToJSON,
} from './CiBuildRunRelationshipsSourceBranchOrTag';
import type { CiBuildRunRelationshipsWorkflow } from './CiBuildRunRelationshipsWorkflow';
import {
    CiBuildRunRelationshipsWorkflowFromJSON,
    CiBuildRunRelationshipsWorkflowFromJSONTyped,
    CiBuildRunRelationshipsWorkflowToJSON,
} from './CiBuildRunRelationshipsWorkflow';

/**
 * 
 * @export
 * @interface CiBuildRunCreateRequestDataRelationships
 */
export interface CiBuildRunCreateRequestDataRelationships {
    /**
     * 
     * @type {CiBuildRunCreateRequestDataRelationshipsBuildRun}
     * @memberof CiBuildRunCreateRequestDataRelationships
     */
    buildRun?: CiBuildRunCreateRequestDataRelationshipsBuildRun;
    /**
     * 
     * @type {CiBuildRunRelationshipsWorkflow}
     * @memberof CiBuildRunCreateRequestDataRelationships
     */
    workflow?: CiBuildRunRelationshipsWorkflow;
    /**
     * 
     * @type {CiBuildRunRelationshipsSourceBranchOrTag}
     * @memberof CiBuildRunCreateRequestDataRelationships
     */
    sourceBranchOrTag?: CiBuildRunRelationshipsSourceBranchOrTag;
    /**
     * 
     * @type {CiBuildRunRelationshipsPullRequest}
     * @memberof CiBuildRunCreateRequestDataRelationships
     */
    pullRequest?: CiBuildRunRelationshipsPullRequest;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataRelationships interface.
 */
export function instanceOfCiBuildRunCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunCreateRequestDataRelationshipsFromJSON(json: any): CiBuildRunCreateRequestDataRelationships {
    return CiBuildRunCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildRun': !exists(json, 'buildRun') ? undefined : CiBuildRunCreateRequestDataRelationshipsBuildRunFromJSON(json['buildRun']),
        'workflow': !exists(json, 'workflow') ? undefined : CiBuildRunRelationshipsWorkflowFromJSON(json['workflow']),
        'sourceBranchOrTag': !exists(json, 'sourceBranchOrTag') ? undefined : CiBuildRunRelationshipsSourceBranchOrTagFromJSON(json['sourceBranchOrTag']),
        'pullRequest': !exists(json, 'pullRequest') ? undefined : CiBuildRunRelationshipsPullRequestFromJSON(json['pullRequest']),
    };
}

export function CiBuildRunCreateRequestDataRelationshipsToJSON(value?: CiBuildRunCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildRun': CiBuildRunCreateRequestDataRelationshipsBuildRunToJSON(value.buildRun),
        'workflow': CiBuildRunRelationshipsWorkflowToJSON(value.workflow),
        'sourceBranchOrTag': CiBuildRunRelationshipsSourceBranchOrTagToJSON(value.sourceBranchOrTag),
        'pullRequest': CiBuildRunRelationshipsPullRequestToJSON(value.pullRequest),
    };
}

