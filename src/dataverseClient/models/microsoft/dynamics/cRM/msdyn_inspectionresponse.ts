import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_inspectionattachmentFromDiscriminatorValue} from './createMsdyn_inspectionattachmentFromDiscriminatorValue';
import {createMsdyn_inspectiondefinitionFromDiscriminatorValue} from './createMsdyn_inspectiondefinitionFromDiscriminatorValue';
import {createMsdyn_inspectioninstanceFromDiscriminatorValue} from './createMsdyn_inspectioninstanceFromDiscriminatorValue';
import {createMsdyn_workorderservicetaskFromDiscriminatorValue} from './createMsdyn_workorderservicetaskFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_inspectionattachment, Msdyn_inspectiondefinition, Msdyn_inspectioninstance, Msdyn_workorderservicetask, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_inspectionresponse extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_inspectiondefinition_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_InspectionDefinition?: Msdyn_inspectiondefinition | undefined;
    private _msdyn_inspectionresponse_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_inspectionresponse_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_inspectionresponse_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_inspectionresponse_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_inspectionresponse_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_inspectionresponse_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_inspectionresponse_ProcessSession?: Processsession[] | undefined;
    private _msdyn_inspectionresponse_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_inspectionresponseid?: string | undefined;
    private _msdyn_isprocessed?: boolean | undefined;
    private _msdyn_isvalidresponse?: boolean | undefined;
    private _msdyn_msdyn_inspectionresponse_msdyn_inspection?: Msdyn_inspectionattachment[] | undefined;
    private _msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance?: Msdyn_inspectioninstance[] | undefined;
    private _msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid?: Msdyn_workorderservicetask[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_responsejsoncontent?: string | undefined;
    private _msdyn_status?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_inspectiondefinition_value property value. 
     * @returns a string
     */
    public get _msdyn_inspectiondefinition_value() {
        return this.__msdyn_inspectiondefinition_value;
    };
    /**
     * Sets the _msdyn_inspectiondefinition_value property value. 
     * @param value Value to set for the _msdyn_inspectiondefinition_value property.
     */
    public set _msdyn_inspectiondefinition_value(value: string | undefined) {
        this.__msdyn_inspectiondefinition_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_inspectionresponse and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_inspectiondefinition_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._msdyn_inspectiondefinition_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_inspectionresponse)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_inspectionresponse).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_inspectionresponse).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_inspectionresponse).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_inspectionresponse).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_inspectionresponse).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_inspectionresponse).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_inspectionresponse).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_InspectionDefinition": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_InspectionDefinition = n.getObjectValue<Msdyn_inspectiondefinition>(createMsdyn_inspectiondefinitionFromDiscriminatorValue); },
            "msdyn_inspectionresponse_AsyncOperations": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_inspectionresponse_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_inspectionresponse_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_inspectionresponse_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_inspectionresponse_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_inspectionresponse_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_inspectionresponse_ProcessSession": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_inspectionresponse_SyncErrors": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponse_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_inspectionresponseid": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_inspectionresponseid = n.getStringValue(); },
            "msdyn_isprocessed": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_isprocessed = n.getBooleanValue(); },
            "msdyn_isvalidresponse": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_isvalidresponse = n.getBooleanValue(); },
            "msdyn_msdyn_inspectionresponse_msdyn_inspection": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_msdyn_inspectionresponse_msdyn_inspection = n.getCollectionOfObjectValues<Msdyn_inspectionattachment>(createMsdyn_inspectionattachmentFromDiscriminatorValue); },
            "msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance = n.getCollectionOfObjectValues<Msdyn_inspectioninstance>(createMsdyn_inspectioninstanceFromDiscriminatorValue); },
            "msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid = n.getCollectionOfObjectValues<Msdyn_workorderservicetask>(createMsdyn_workorderservicetaskFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_name = n.getStringValue(); },
            "msdyn_responsejsoncontent": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_responsejsoncontent = n.getStringValue(); },
            "msdyn_status": (o, n) => { (o as unknown as Msdyn_inspectionresponse).msdyn_status = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_inspectionresponse).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_inspectionresponse).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_inspectionresponse).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_inspectionresponse).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_inspectionresponse).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_inspectionresponse).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_inspectionresponse).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_inspectionresponse).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_inspectionresponse).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_inspectionresponse).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_InspectionDefinition property value. 
     * @returns a msdyn_inspectiondefinition
     */
    public get msdyn_InspectionDefinition() {
        return this._msdyn_InspectionDefinition;
    };
    /**
     * Sets the msdyn_InspectionDefinition property value. 
     * @param value Value to set for the msdyn_InspectionDefinition property.
     */
    public set msdyn_InspectionDefinition(value: Msdyn_inspectiondefinition | undefined) {
        this._msdyn_InspectionDefinition = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_inspectionresponse_AsyncOperations() {
        return this._msdyn_inspectionresponse_AsyncOperations;
    };
    /**
     * Sets the msdyn_inspectionresponse_AsyncOperations property value. 
     * @param value Value to set for the msdyn_inspectionresponse_AsyncOperations property.
     */
    public set msdyn_inspectionresponse_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_inspectionresponse_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_inspectionresponse_BulkDeleteFailures() {
        return this._msdyn_inspectionresponse_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_inspectionresponse_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_inspectionresponse_BulkDeleteFailures property.
     */
    public set msdyn_inspectionresponse_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_inspectionresponse_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_inspectionresponse_DuplicateBaseRecord() {
        return this._msdyn_inspectionresponse_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_inspectionresponse_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_inspectionresponse_DuplicateBaseRecord property.
     */
    public set msdyn_inspectionresponse_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_inspectionresponse_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_inspectionresponse_DuplicateMatchingRecord() {
        return this._msdyn_inspectionresponse_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_inspectionresponse_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_inspectionresponse_DuplicateMatchingRecord property.
     */
    public set msdyn_inspectionresponse_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_inspectionresponse_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_inspectionresponse_MailboxTrackingFolders() {
        return this._msdyn_inspectionresponse_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_inspectionresponse_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_inspectionresponse_MailboxTrackingFolders property.
     */
    public set msdyn_inspectionresponse_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_inspectionresponse_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_inspectionresponse_PrincipalObjectAttributeAccesses() {
        return this._msdyn_inspectionresponse_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_inspectionresponse_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_inspectionresponse_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_inspectionresponse_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_inspectionresponse_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_inspectionresponse_ProcessSession() {
        return this._msdyn_inspectionresponse_ProcessSession;
    };
    /**
     * Sets the msdyn_inspectionresponse_ProcessSession property value. 
     * @param value Value to set for the msdyn_inspectionresponse_ProcessSession property.
     */
    public set msdyn_inspectionresponse_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_inspectionresponse_ProcessSession = value;
    };
    /**
     * Gets the msdyn_inspectionresponse_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_inspectionresponse_SyncErrors() {
        return this._msdyn_inspectionresponse_SyncErrors;
    };
    /**
     * Sets the msdyn_inspectionresponse_SyncErrors property value. 
     * @param value Value to set for the msdyn_inspectionresponse_SyncErrors property.
     */
    public set msdyn_inspectionresponse_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_inspectionresponse_SyncErrors = value;
    };
    /**
     * Gets the msdyn_inspectionresponseid property value. 
     * @returns a string
     */
    public get msdyn_inspectionresponseid() {
        return this._msdyn_inspectionresponseid;
    };
    /**
     * Sets the msdyn_inspectionresponseid property value. 
     * @param value Value to set for the msdyn_inspectionresponseid property.
     */
    public set msdyn_inspectionresponseid(value: string | undefined) {
        this._msdyn_inspectionresponseid = value;
    };
    /**
     * Gets the msdyn_isprocessed property value. 
     * @returns a boolean
     */
    public get msdyn_isprocessed() {
        return this._msdyn_isprocessed;
    };
    /**
     * Sets the msdyn_isprocessed property value. 
     * @param value Value to set for the msdyn_isprocessed property.
     */
    public set msdyn_isprocessed(value: boolean | undefined) {
        this._msdyn_isprocessed = value;
    };
    /**
     * Gets the msdyn_isvalidresponse property value. 
     * @returns a boolean
     */
    public get msdyn_isvalidresponse() {
        return this._msdyn_isvalidresponse;
    };
    /**
     * Sets the msdyn_isvalidresponse property value. 
     * @param value Value to set for the msdyn_isvalidresponse property.
     */
    public set msdyn_isvalidresponse(value: boolean | undefined) {
        this._msdyn_isvalidresponse = value;
    };
    /**
     * Gets the msdyn_msdyn_inspectionresponse_msdyn_inspection property value. 
     * @returns a msdyn_inspectionattachment
     */
    public get msdyn_msdyn_inspectionresponse_msdyn_inspection() {
        return this._msdyn_msdyn_inspectionresponse_msdyn_inspection;
    };
    /**
     * Sets the msdyn_msdyn_inspectionresponse_msdyn_inspection property value. 
     * @param value Value to set for the msdyn_msdyn_inspectionresponse_msdyn_inspection property.
     */
    public set msdyn_msdyn_inspectionresponse_msdyn_inspection(value: Msdyn_inspectionattachment[] | undefined) {
        this._msdyn_msdyn_inspectionresponse_msdyn_inspection = value;
    };
    /**
     * Gets the msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance property value. 
     * @returns a msdyn_inspectioninstance
     */
    public get msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance() {
        return this._msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance;
    };
    /**
     * Sets the msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance property value. 
     * @param value Value to set for the msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance property.
     */
    public set msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance(value: Msdyn_inspectioninstance[] | undefined) {
        this._msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance = value;
    };
    /**
     * Gets the msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid property value. 
     * @returns a msdyn_workorderservicetask
     */
    public get msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid() {
        return this._msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid;
    };
    /**
     * Sets the msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid property value. 
     * @param value Value to set for the msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid property.
     */
    public set msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid(value: Msdyn_workorderservicetask[] | undefined) {
        this._msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid = value;
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
     * Gets the msdyn_responsejsoncontent property value. 
     * @returns a string
     */
    public get msdyn_responsejsoncontent() {
        return this._msdyn_responsejsoncontent;
    };
    /**
     * Sets the msdyn_responsejsoncontent property value. 
     * @param value Value to set for the msdyn_responsejsoncontent property.
     */
    public set msdyn_responsejsoncontent(value: string | undefined) {
        this._msdyn_responsejsoncontent = value;
    };
    /**
     * Gets the msdyn_status property value. 
     * @returns a integer
     */
    public get msdyn_status() {
        return this._msdyn_status;
    };
    /**
     * Sets the msdyn_status property value. 
     * @param value Value to set for the msdyn_status property.
     */
    public set msdyn_status(value: number | undefined) {
        this._msdyn_status = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyn_inspectiondefinition_value", this._msdyn_inspectiondefinition_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_inspectiondefinition>("msdyn_InspectionDefinition", this.msdyn_InspectionDefinition);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_inspectionresponse_AsyncOperations", this.msdyn_inspectionresponse_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_inspectionresponse_BulkDeleteFailures", this.msdyn_inspectionresponse_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_inspectionresponse_DuplicateBaseRecord", this.msdyn_inspectionresponse_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_inspectionresponse_DuplicateMatchingRecord", this.msdyn_inspectionresponse_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_inspectionresponse_MailboxTrackingFolders", this.msdyn_inspectionresponse_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_inspectionresponse_PrincipalObjectAttributeAccesses", this.msdyn_inspectionresponse_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_inspectionresponse_ProcessSession", this.msdyn_inspectionresponse_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_inspectionresponse_SyncErrors", this.msdyn_inspectionresponse_SyncErrors);
        writer.writeStringValue("msdyn_inspectionresponseid", this.msdyn_inspectionresponseid);
        writer.writeBooleanValue("msdyn_isprocessed", this.msdyn_isprocessed);
        writer.writeBooleanValue("msdyn_isvalidresponse", this.msdyn_isvalidresponse);
        writer.writeCollectionOfObjectValues<Msdyn_inspectionattachment>("msdyn_msdyn_inspectionresponse_msdyn_inspection", this.msdyn_msdyn_inspectionresponse_msdyn_inspection);
        writer.writeCollectionOfObjectValues<Msdyn_inspectioninstance>("msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance", this.msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance);
        writer.writeCollectionOfObjectValues<Msdyn_workorderservicetask>("msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid", this.msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_responsejsoncontent", this.msdyn_responsejsoncontent);
        writer.writeNumberValue("msdyn_status", this.msdyn_status);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
