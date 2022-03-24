import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_predictivescoreFromDiscriminatorValue} from './createMsdyn_predictivescoreFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_predictivescore, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_predictivemodelscore extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_predictivescoreid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_entityid?: string | undefined;
    private _msdyn_entitytype?: string | undefined;
    private _msdyn_grade?: number | undefined;
    private _msdyn_modelname?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_predictionid?: string | undefined;
    private _msdyn_predictivemodelscore_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_predictivemodelscore_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_predictivemodelscore_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_predictivemodelscore_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_predictivemodelscore_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_predictivemodelscore_ProcessSession?: Processsession[] | undefined;
    private _msdyn_predictivemodelscore_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_predictivemodelscoreid?: string | undefined;
    private _msdyn_PredictiveScoreId?: Msdyn_predictivescore | undefined;
    private _msdyn_score?: number | undefined;
    private _msdyn_scoredon?: Date | undefined;
    private _msdyn_scorehistory?: string | undefined;
    private _msdyn_scorereasons?: string | undefined;
    private _msdyn_scoretrend?: number | undefined;
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
     * Gets the _msdyn_predictivescoreid_value property value. 
     * @returns a string
     */
    public get _msdyn_predictivescoreid_value() {
        return this.__msdyn_predictivescoreid_value;
    };
    /**
     * Sets the _msdyn_predictivescoreid_value property value. 
     * @param value Value to set for the _msdyn_predictivescoreid_value property.
     */
    public set _msdyn_predictivescoreid_value(value: string | undefined) {
        this.__msdyn_predictivescoreid_value = value;
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
     * Instantiates a new msdyn_predictivemodelscore and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_predictivemodelscore)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_predictivemodelscore)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_predictivemodelscore)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_predictivemodelscore)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_predictivescoreid_value": (o, n) => { (o as unknown as Msdyn_predictivemodelscore)._msdyn_predictivescoreid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_predictivemodelscore)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_entityid": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_entityid = n.getStringValue(); },
            "msdyn_entitytype": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_entitytype = n.getStringValue(); },
            "msdyn_grade": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_grade = n.getNumberValue(); },
            "msdyn_modelname": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_modelname = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_name = n.getStringValue(); },
            "msdyn_predictionid": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictionid = n.getStringValue(); },
            "msdyn_predictivemodelscore_AsyncOperations": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_ProcessSession": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_predictivemodelscore_SyncErrors": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscore_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_predictivemodelscoreid": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_predictivemodelscoreid = n.getStringValue(); },
            "msdyn_PredictiveScoreId": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_PredictiveScoreId = n.getObjectValue<Msdyn_predictivescore>(createMsdyn_predictivescoreFromDiscriminatorValue); },
            "msdyn_score": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_score = n.getNumberValue(); },
            "msdyn_scoredon": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_scoredon = n.getDateValue(); },
            "msdyn_scorehistory": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_scorehistory = n.getStringValue(); },
            "msdyn_scorereasons": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_scorereasons = n.getStringValue(); },
            "msdyn_scoretrend": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).msdyn_scoretrend = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_predictivemodelscore).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_modelname property value. 
     * @returns a string
     */
    public get msdyn_modelname() {
        return this._msdyn_modelname;
    };
    /**
     * Sets the msdyn_modelname property value. 
     * @param value Value to set for the msdyn_modelname property.
     */
    public set msdyn_modelname(value: string | undefined) {
        this._msdyn_modelname = value;
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
     * Gets the msdyn_predictionid property value. 
     * @returns a string
     */
    public get msdyn_predictionid() {
        return this._msdyn_predictionid;
    };
    /**
     * Sets the msdyn_predictionid property value. 
     * @param value Value to set for the msdyn_predictionid property.
     */
    public set msdyn_predictionid(value: string | undefined) {
        this._msdyn_predictionid = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_predictivemodelscore_AsyncOperations() {
        return this._msdyn_predictivemodelscore_AsyncOperations;
    };
    /**
     * Sets the msdyn_predictivemodelscore_AsyncOperations property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_AsyncOperations property.
     */
    public set msdyn_predictivemodelscore_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_predictivemodelscore_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_predictivemodelscore_BulkDeleteFailures() {
        return this._msdyn_predictivemodelscore_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_predictivemodelscore_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_BulkDeleteFailures property.
     */
    public set msdyn_predictivemodelscore_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_predictivemodelscore_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_predictivemodelscore_DuplicateBaseRecord() {
        return this._msdyn_predictivemodelscore_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_predictivemodelscore_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_DuplicateBaseRecord property.
     */
    public set msdyn_predictivemodelscore_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_predictivemodelscore_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_predictivemodelscore_DuplicateMatchingRecord() {
        return this._msdyn_predictivemodelscore_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_predictivemodelscore_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_DuplicateMatchingRecord property.
     */
    public set msdyn_predictivemodelscore_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_predictivemodelscore_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_predictivemodelscore_MailboxTrackingFolders() {
        return this._msdyn_predictivemodelscore_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_predictivemodelscore_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_MailboxTrackingFolders property.
     */
    public set msdyn_predictivemodelscore_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_predictivemodelscore_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses() {
        return this._msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_predictivemodelscore_ProcessSession() {
        return this._msdyn_predictivemodelscore_ProcessSession;
    };
    /**
     * Sets the msdyn_predictivemodelscore_ProcessSession property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_ProcessSession property.
     */
    public set msdyn_predictivemodelscore_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_predictivemodelscore_ProcessSession = value;
    };
    /**
     * Gets the msdyn_predictivemodelscore_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_predictivemodelscore_SyncErrors() {
        return this._msdyn_predictivemodelscore_SyncErrors;
    };
    /**
     * Sets the msdyn_predictivemodelscore_SyncErrors property value. 
     * @param value Value to set for the msdyn_predictivemodelscore_SyncErrors property.
     */
    public set msdyn_predictivemodelscore_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_predictivemodelscore_SyncErrors = value;
    };
    /**
     * Gets the msdyn_predictivemodelscoreid property value. 
     * @returns a string
     */
    public get msdyn_predictivemodelscoreid() {
        return this._msdyn_predictivemodelscoreid;
    };
    /**
     * Sets the msdyn_predictivemodelscoreid property value. 
     * @param value Value to set for the msdyn_predictivemodelscoreid property.
     */
    public set msdyn_predictivemodelscoreid(value: string | undefined) {
        this._msdyn_predictivemodelscoreid = value;
    };
    /**
     * Gets the msdyn_PredictiveScoreId property value. 
     * @returns a msdyn_predictivescore
     */
    public get msdyn_PredictiveScoreId() {
        return this._msdyn_PredictiveScoreId;
    };
    /**
     * Sets the msdyn_PredictiveScoreId property value. 
     * @param value Value to set for the msdyn_PredictiveScoreId property.
     */
    public set msdyn_PredictiveScoreId(value: Msdyn_predictivescore | undefined) {
        this._msdyn_PredictiveScoreId = value;
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
     * Gets the msdyn_scorehistory property value. 
     * @returns a string
     */
    public get msdyn_scorehistory() {
        return this._msdyn_scorehistory;
    };
    /**
     * Sets the msdyn_scorehistory property value. 
     * @param value Value to set for the msdyn_scorehistory property.
     */
    public set msdyn_scorehistory(value: string | undefined) {
        this._msdyn_scorehistory = value;
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
        writer.writeStringValue("_msdyn_predictivescoreid_value", this._msdyn_predictivescoreid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_entityid", this.msdyn_entityid);
        writer.writeStringValue("msdyn_entitytype", this.msdyn_entitytype);
        writer.writeNumberValue("msdyn_grade", this.msdyn_grade);
        writer.writeStringValue("msdyn_modelname", this.msdyn_modelname);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_predictionid", this.msdyn_predictionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_predictivemodelscore_AsyncOperations", this.msdyn_predictivemodelscore_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_predictivemodelscore_BulkDeleteFailures", this.msdyn_predictivemodelscore_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_predictivemodelscore_DuplicateBaseRecord", this.msdyn_predictivemodelscore_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_predictivemodelscore_DuplicateMatchingRecord", this.msdyn_predictivemodelscore_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_predictivemodelscore_MailboxTrackingFolders", this.msdyn_predictivemodelscore_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses", this.msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_predictivemodelscore_ProcessSession", this.msdyn_predictivemodelscore_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_predictivemodelscore_SyncErrors", this.msdyn_predictivemodelscore_SyncErrors);
        writer.writeStringValue("msdyn_predictivemodelscoreid", this.msdyn_predictivemodelscoreid);
        writer.writeObjectValue<Msdyn_predictivescore>("msdyn_PredictiveScoreId", this.msdyn_PredictiveScoreId);
        writer.writeNumberValue("msdyn_score", this.msdyn_score);
        writer.writeDateValue("msdyn_scoredon", this.msdyn_scoredon);
        writer.writeStringValue("msdyn_scorehistory", this.msdyn_scorehistory);
        writer.writeStringValue("msdyn_scorereasons", this.msdyn_scorereasons);
        writer.writeNumberValue("msdyn_scoretrend", this.msdyn_scoretrend);
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
