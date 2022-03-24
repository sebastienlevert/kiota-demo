import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_predictivemodelscoreFromDiscriminatorValue} from './createMsdyn_predictivemodelscoreFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Lead, Mailboxtrackingfolder, Msdyn_predictivemodelscore, Opportunity, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_predictivescore extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_contributingpredictionids?: string | undefined;
    private _msdyn_entityid?: string | undefined;
    private _msdyn_entitytype?: string | undefined;
    private _msdyn_grade?: number | undefined;
    private _msdyn_msdyn_predictivescore_lead?: Lead[] | undefined;
    private _msdyn_msdyn_predictivescore_opportunity?: Opportunity[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_predictivescore_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_predictivescore_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_predictivescore_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_predictivescore_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_predictivescore_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_predictivescore_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_predictivescore_ProcessSession?: Processsession[] | undefined;
    private _msdyn_predictivescore_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_predictivescoreid?: string | undefined;
    private _msdyn_PS_PMS?: Msdyn_predictivemodelscore[] | undefined;
    private _msdyn_score?: number | undefined;
    private _msdyn_scoredon?: Date | undefined;
    private _msdyn_scorereasons?: string | undefined;
    private _msdyn_scoretrend?: number | undefined;
    private _msdyn_similaropportunities?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new msdyn_predictivescore and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_predictivescore)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_predictivescore)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_predictivescore)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_predictivescore)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_predictivescore)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_predictivescore).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_predictivescore).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_predictivescore).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_predictivescore).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_predictivescore).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_predictivescore).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_predictivescore).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_contributingpredictionids": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_contributingpredictionids = n.getStringValue(); },
            "msdyn_entityid": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_entityid = n.getStringValue(); },
            "msdyn_entitytype": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_entitytype = n.getStringValue(); },
            "msdyn_grade": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_grade = n.getNumberValue(); },
            "msdyn_msdyn_predictivescore_lead": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_msdyn_predictivescore_lead = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "msdyn_msdyn_predictivescore_opportunity": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_msdyn_predictivescore_opportunity = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_name = n.getStringValue(); },
            "msdyn_predictivescore_AsyncOperations": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_predictivescore_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_predictivescore_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_predictivescore_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_predictivescore_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_predictivescore_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_predictivescore_ProcessSession": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_predictivescore_SyncErrors": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescore_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_predictivescoreid": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_predictivescoreid = n.getStringValue(); },
            "msdyn_PS_PMS": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_PS_PMS = n.getCollectionOfObjectValues<Msdyn_predictivemodelscore>(createMsdyn_predictivemodelscoreFromDiscriminatorValue); },
            "msdyn_score": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_score = n.getNumberValue(); },
            "msdyn_scoredon": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_scoredon = n.getDateValue(); },
            "msdyn_scorereasons": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_scorereasons = n.getStringValue(); },
            "msdyn_scoretrend": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_scoretrend = n.getNumberValue(); },
            "msdyn_similaropportunities": (o, n) => { (o as unknown as Msdyn_predictivescore).msdyn_similaropportunities = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_predictivescore).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_predictivescore).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_predictivescore).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_predictivescore).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_predictivescore).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_predictivescore).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_predictivescore).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_contributingpredictionids property value. 
     * @returns a string
     */
    public get msdyn_contributingpredictionids() {
        return this._msdyn_contributingpredictionids;
    };
    /**
     * Sets the msdyn_contributingpredictionids property value. 
     * @param value Value to set for the msdyn_contributingpredictionids property.
     */
    public set msdyn_contributingpredictionids(value: string | undefined) {
        this._msdyn_contributingpredictionids = value;
    };
    /**
     * Gets the msdyn_entityid property value. 
     * @returns a string
     */
    public get msdyn_entityid() {
        return this._msdyn_entityid;
    };
    /**
     * Sets the msdyn_entityid property value. 
     * @param value Value to set for the msdyn_entityid property.
     */
    public set msdyn_entityid(value: string | undefined) {
        this._msdyn_entityid = value;
    };
    /**
     * Gets the msdyn_entitytype property value. 
     * @returns a string
     */
    public get msdyn_entitytype() {
        return this._msdyn_entitytype;
    };
    /**
     * Sets the msdyn_entitytype property value. 
     * @param value Value to set for the msdyn_entitytype property.
     */
    public set msdyn_entitytype(value: string | undefined) {
        this._msdyn_entitytype = value;
    };
    /**
     * Gets the msdyn_grade property value. 
     * @returns a integer
     */
    public get msdyn_grade() {
        return this._msdyn_grade;
    };
    /**
     * Sets the msdyn_grade property value. 
     * @param value Value to set for the msdyn_grade property.
     */
    public set msdyn_grade(value: number | undefined) {
        this._msdyn_grade = value;
    };
    /**
     * Gets the msdyn_msdyn_predictivescore_lead property value. 
     * @returns a lead
     */
    public get msdyn_msdyn_predictivescore_lead() {
        return this._msdyn_msdyn_predictivescore_lead;
    };
    /**
     * Sets the msdyn_msdyn_predictivescore_lead property value. 
     * @param value Value to set for the msdyn_msdyn_predictivescore_lead property.
     */
    public set msdyn_msdyn_predictivescore_lead(value: Lead[] | undefined) {
        this._msdyn_msdyn_predictivescore_lead = value;
    };
    /**
     * Gets the msdyn_msdyn_predictivescore_opportunity property value. 
     * @returns a opportunity
     */
    public get msdyn_msdyn_predictivescore_opportunity() {
        return this._msdyn_msdyn_predictivescore_opportunity;
    };
    /**
     * Sets the msdyn_msdyn_predictivescore_opportunity property value. 
     * @param value Value to set for the msdyn_msdyn_predictivescore_opportunity property.
     */
    public set msdyn_msdyn_predictivescore_opportunity(value: Opportunity[] | undefined) {
        this._msdyn_msdyn_predictivescore_opportunity = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_predictivescore_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_predictivescore_AsyncOperations() {
        return this._msdyn_predictivescore_AsyncOperations;
    };
    /**
     * Sets the msdyn_predictivescore_AsyncOperations property value. 
     * @param value Value to set for the msdyn_predictivescore_AsyncOperations property.
     */
    public set msdyn_predictivescore_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_predictivescore_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_predictivescore_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_predictivescore_BulkDeleteFailures() {
        return this._msdyn_predictivescore_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_predictivescore_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_predictivescore_BulkDeleteFailures property.
     */
    public set msdyn_predictivescore_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_predictivescore_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_predictivescore_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_predictivescore_DuplicateBaseRecord() {
        return this._msdyn_predictivescore_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_predictivescore_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_predictivescore_DuplicateBaseRecord property.
     */
    public set msdyn_predictivescore_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_predictivescore_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_predictivescore_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_predictivescore_DuplicateMatchingRecord() {
        return this._msdyn_predictivescore_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_predictivescore_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_predictivescore_DuplicateMatchingRecord property.
     */
    public set msdyn_predictivescore_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_predictivescore_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_predictivescore_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_predictivescore_MailboxTrackingFolders() {
        return this._msdyn_predictivescore_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_predictivescore_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_predictivescore_MailboxTrackingFolders property.
     */
    public set msdyn_predictivescore_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_predictivescore_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_predictivescore_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_predictivescore_PrincipalObjectAttributeAccesses() {
        return this._msdyn_predictivescore_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_predictivescore_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_predictivescore_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_predictivescore_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_predictivescore_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_predictivescore_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_predictivescore_ProcessSession() {
        return this._msdyn_predictivescore_ProcessSession;
    };
    /**
     * Sets the msdyn_predictivescore_ProcessSession property value. 
     * @param value Value to set for the msdyn_predictivescore_ProcessSession property.
     */
    public set msdyn_predictivescore_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_predictivescore_ProcessSession = value;
    };
    /**
     * Gets the msdyn_predictivescore_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_predictivescore_SyncErrors() {
        return this._msdyn_predictivescore_SyncErrors;
    };
    /**
     * Sets the msdyn_predictivescore_SyncErrors property value. 
     * @param value Value to set for the msdyn_predictivescore_SyncErrors property.
     */
    public set msdyn_predictivescore_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_predictivescore_SyncErrors = value;
    };
    /**
     * Gets the msdyn_predictivescoreid property value. 
     * @returns a string
     */
    public get msdyn_predictivescoreid() {
        return this._msdyn_predictivescoreid;
    };
    /**
     * Sets the msdyn_predictivescoreid property value. 
     * @param value Value to set for the msdyn_predictivescoreid property.
     */
    public set msdyn_predictivescoreid(value: string | undefined) {
        this._msdyn_predictivescoreid = value;
    };
    /**
     * Gets the msdyn_PS_PMS property value. 
     * @returns a msdyn_predictivemodelscore
     */
    public get msdyn_PS_PMS() {
        return this._msdyn_PS_PMS;
    };
    /**
     * Sets the msdyn_PS_PMS property value. 
     * @param value Value to set for the msdyn_PS_PMS property.
     */
    public set msdyn_PS_PMS(value: Msdyn_predictivemodelscore[] | undefined) {
        this._msdyn_PS_PMS = value;
    };
    /**
     * Gets the msdyn_score property value. 
     * @returns a integer
     */
    public get msdyn_score() {
        return this._msdyn_score;
    };
    /**
     * Sets the msdyn_score property value. 
     * @param value Value to set for the msdyn_score property.
     */
    public set msdyn_score(value: number | undefined) {
        this._msdyn_score = value;
    };
    /**
     * Gets the msdyn_scoredon property value. 
     * @returns a Date
     */
    public get msdyn_scoredon() {
        return this._msdyn_scoredon;
    };
    /**
     * Sets the msdyn_scoredon property value. 
     * @param value Value to set for the msdyn_scoredon property.
     */
    public set msdyn_scoredon(value: Date | undefined) {
        this._msdyn_scoredon = value;
    };
    /**
     * Gets the msdyn_scorereasons property value. 
     * @returns a string
     */
    public get msdyn_scorereasons() {
        return this._msdyn_scorereasons;
    };
    /**
     * Sets the msdyn_scorereasons property value. 
     * @param value Value to set for the msdyn_scorereasons property.
     */
    public set msdyn_scorereasons(value: string | undefined) {
        this._msdyn_scorereasons = value;
    };
    /**
     * Gets the msdyn_scoretrend property value. 
     * @returns a integer
     */
    public get msdyn_scoretrend() {
        return this._msdyn_scoretrend;
    };
    /**
     * Sets the msdyn_scoretrend property value. 
     * @param value Value to set for the msdyn_scoretrend property.
     */
    public set msdyn_scoretrend(value: number | undefined) {
        this._msdyn_scoretrend = value;
    };
    /**
     * Gets the msdyn_similaropportunities property value. 
     * @returns a string
     */
    public get msdyn_similaropportunities() {
        return this._msdyn_similaropportunities;
    };
    /**
     * Sets the msdyn_similaropportunities property value. 
     * @param value Value to set for the msdyn_similaropportunities property.
     */
    public set msdyn_similaropportunities(value: string | undefined) {
        this._msdyn_similaropportunities = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_contributingpredictionids", this.msdyn_contributingpredictionids);
        writer.writeStringValue("msdyn_entityid", this.msdyn_entityid);
        writer.writeStringValue("msdyn_entitytype", this.msdyn_entitytype);
        writer.writeNumberValue("msdyn_grade", this.msdyn_grade);
        writer.writeCollectionOfObjectValues<Lead>("msdyn_msdyn_predictivescore_lead", this.msdyn_msdyn_predictivescore_lead);
        writer.writeCollectionOfObjectValues<Opportunity>("msdyn_msdyn_predictivescore_opportunity", this.msdyn_msdyn_predictivescore_opportunity);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_predictivescore_AsyncOperations", this.msdyn_predictivescore_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_predictivescore_BulkDeleteFailures", this.msdyn_predictivescore_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_predictivescore_DuplicateBaseRecord", this.msdyn_predictivescore_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_predictivescore_DuplicateMatchingRecord", this.msdyn_predictivescore_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_predictivescore_MailboxTrackingFolders", this.msdyn_predictivescore_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_predictivescore_PrincipalObjectAttributeAccesses", this.msdyn_predictivescore_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_predictivescore_ProcessSession", this.msdyn_predictivescore_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_predictivescore_SyncErrors", this.msdyn_predictivescore_SyncErrors);
        writer.writeStringValue("msdyn_predictivescoreid", this.msdyn_predictivescoreid);
        writer.writeCollectionOfObjectValues<Msdyn_predictivemodelscore>("msdyn_PS_PMS", this.msdyn_PS_PMS);
        writer.writeNumberValue("msdyn_score", this.msdyn_score);
        writer.writeDateValue("msdyn_scoredon", this.msdyn_scoredon);
        writer.writeStringValue("msdyn_scorereasons", this.msdyn_scorereasons);
        writer.writeNumberValue("msdyn_scoretrend", this.msdyn_scoretrend);
        writer.writeStringValue("msdyn_similaropportunities", this.msdyn_similaropportunities);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
