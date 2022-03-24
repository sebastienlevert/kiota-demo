import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_assignmentruleFromDiscriminatorValue} from './createMsdyn_assignmentruleFromDiscriminatorValue';
import {createMsdyn_segmentFromDiscriminatorValue} from './createMsdyn_segmentFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Lead, Mailboxtrackingfolder, Msdyn_assignmentrule, Msdyn_segment, Opportunity, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_salesroutingrun extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_assignmentruleid_value?: string | undefined;
    private __msdyn_ownerassigned_value?: string | undefined;
    private __msdyn_segmentid_value?: string | undefined;
    private __msdyn_targetobject_value?: string | undefined;
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
    private _msdyn_assignmentruleid?: Msdyn_assignmentrule | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ownerassigned_systemuser?: Systemuser | undefined;
    private _msdyn_ownerassigned_team?: Team | undefined;
    private _msdyn_salesroutingrun_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_salesroutingrun_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_salesroutingrun_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_salesroutingrun_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_salesroutingrun_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_salesroutingrun_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_salesroutingrun_ProcessSession?: Processsession[] | undefined;
    private _msdyn_salesroutingrun_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_salesroutingrunid?: string | undefined;
    private _msdyn_segmentid?: Msdyn_segment | undefined;
    private _msdyn_targetobject_lead?: Lead | undefined;
    private _msdyn_targetobject_opportunity?: Opportunity | undefined;
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
     * Gets the _msdyn_assignmentruleid_value property value. 
     * @returns a string
     */
    public get _msdyn_assignmentruleid_value() {
        return this.__msdyn_assignmentruleid_value;
    };
    /**
     * Sets the _msdyn_assignmentruleid_value property value. 
     * @param value Value to set for the _msdyn_assignmentruleid_value property.
     */
    public set _msdyn_assignmentruleid_value(value: string | undefined) {
        this.__msdyn_assignmentruleid_value = value;
    };
    /**
     * Gets the _msdyn_ownerassigned_value property value. 
     * @returns a string
     */
    public get _msdyn_ownerassigned_value() {
        return this.__msdyn_ownerassigned_value;
    };
    /**
     * Sets the _msdyn_ownerassigned_value property value. 
     * @param value Value to set for the _msdyn_ownerassigned_value property.
     */
    public set _msdyn_ownerassigned_value(value: string | undefined) {
        this.__msdyn_ownerassigned_value = value;
    };
    /**
     * Gets the _msdyn_segmentid_value property value. 
     * @returns a string
     */
    public get _msdyn_segmentid_value() {
        return this.__msdyn_segmentid_value;
    };
    /**
     * Sets the _msdyn_segmentid_value property value. 
     * @param value Value to set for the _msdyn_segmentid_value property.
     */
    public set _msdyn_segmentid_value(value: string | undefined) {
        this.__msdyn_segmentid_value = value;
    };
    /**
     * Gets the _msdyn_targetobject_value property value. 
     * @returns a string
     */
    public get _msdyn_targetobject_value() {
        return this.__msdyn_targetobject_value;
    };
    /**
     * Sets the _msdyn_targetobject_value property value. 
     * @param value Value to set for the _msdyn_targetobject_value property.
     */
    public set _msdyn_targetobject_value(value: string | undefined) {
        this.__msdyn_targetobject_value = value;
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
     * Instantiates a new msdyn_salesroutingrun and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_assignmentruleid_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._msdyn_assignmentruleid_value = n.getStringValue(); },
            "_msdyn_ownerassigned_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._msdyn_ownerassigned_value = n.getStringValue(); },
            "_msdyn_segmentid_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._msdyn_segmentid_value = n.getStringValue(); },
            "_msdyn_targetobject_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._msdyn_targetobject_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_salesroutingrun)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_salesroutingrun).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_salesroutingrun).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_salesroutingrun).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_salesroutingrun).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_salesroutingrun).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_salesroutingrun).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_salesroutingrun).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_assignmentruleid": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_assignmentruleid = n.getObjectValue<Msdyn_assignmentrule>(createMsdyn_assignmentruleFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_name = n.getStringValue(); },
            "msdyn_ownerassigned_systemuser": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_ownerassigned_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_ownerassigned_team": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_ownerassigned_team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "msdyn_salesroutingrun_AsyncOperations": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_salesroutingrun_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_salesroutingrun_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_salesroutingrun_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_salesroutingrun_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_salesroutingrun_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_salesroutingrun_ProcessSession": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_salesroutingrun_SyncErrors": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrun_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_salesroutingrunid": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_salesroutingrunid = n.getStringValue(); },
            "msdyn_segmentid": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_segmentid = n.getObjectValue<Msdyn_segment>(createMsdyn_segmentFromDiscriminatorValue); },
            "msdyn_targetobject_lead": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_targetobject_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "msdyn_targetobject_opportunity": (o, n) => { (o as unknown as Msdyn_salesroutingrun).msdyn_targetobject_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_salesroutingrun).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_salesroutingrun).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_salesroutingrun).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_salesroutingrun).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_salesroutingrun).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_salesroutingrun).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_salesroutingrun).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_salesroutingrun).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_salesroutingrun).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_salesroutingrun).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_assignmentruleid property value. 
     * @returns a msdyn_assignmentrule
     */
    public get msdyn_assignmentruleid() {
        return this._msdyn_assignmentruleid;
    };
    /**
     * Sets the msdyn_assignmentruleid property value. 
     * @param value Value to set for the msdyn_assignmentruleid property.
     */
    public set msdyn_assignmentruleid(value: Msdyn_assignmentrule | undefined) {
        this._msdyn_assignmentruleid = value;
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
     * Gets the msdyn_ownerassigned_systemuser property value. 
     * @returns a systemuser
     */
    public get msdyn_ownerassigned_systemuser() {
        return this._msdyn_ownerassigned_systemuser;
    };
    /**
     * Sets the msdyn_ownerassigned_systemuser property value. 
     * @param value Value to set for the msdyn_ownerassigned_systemuser property.
     */
    public set msdyn_ownerassigned_systemuser(value: Systemuser | undefined) {
        this._msdyn_ownerassigned_systemuser = value;
    };
    /**
     * Gets the msdyn_ownerassigned_team property value. 
     * @returns a team
     */
    public get msdyn_ownerassigned_team() {
        return this._msdyn_ownerassigned_team;
    };
    /**
     * Sets the msdyn_ownerassigned_team property value. 
     * @param value Value to set for the msdyn_ownerassigned_team property.
     */
    public set msdyn_ownerassigned_team(value: Team | undefined) {
        this._msdyn_ownerassigned_team = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_salesroutingrun_AsyncOperations() {
        return this._msdyn_salesroutingrun_AsyncOperations;
    };
    /**
     * Sets the msdyn_salesroutingrun_AsyncOperations property value. 
     * @param value Value to set for the msdyn_salesroutingrun_AsyncOperations property.
     */
    public set msdyn_salesroutingrun_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_salesroutingrun_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_salesroutingrun_BulkDeleteFailures() {
        return this._msdyn_salesroutingrun_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_salesroutingrun_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_salesroutingrun_BulkDeleteFailures property.
     */
    public set msdyn_salesroutingrun_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_salesroutingrun_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_salesroutingrun_DuplicateBaseRecord() {
        return this._msdyn_salesroutingrun_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_salesroutingrun_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_salesroutingrun_DuplicateBaseRecord property.
     */
    public set msdyn_salesroutingrun_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_salesroutingrun_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_salesroutingrun_DuplicateMatchingRecord() {
        return this._msdyn_salesroutingrun_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_salesroutingrun_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_salesroutingrun_DuplicateMatchingRecord property.
     */
    public set msdyn_salesroutingrun_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_salesroutingrun_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_salesroutingrun_MailboxTrackingFolders() {
        return this._msdyn_salesroutingrun_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_salesroutingrun_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_salesroutingrun_MailboxTrackingFolders property.
     */
    public set msdyn_salesroutingrun_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_salesroutingrun_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_salesroutingrun_PrincipalObjectAttributeAccesses() {
        return this._msdyn_salesroutingrun_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_salesroutingrun_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_salesroutingrun_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_salesroutingrun_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_salesroutingrun_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_salesroutingrun_ProcessSession() {
        return this._msdyn_salesroutingrun_ProcessSession;
    };
    /**
     * Sets the msdyn_salesroutingrun_ProcessSession property value. 
     * @param value Value to set for the msdyn_salesroutingrun_ProcessSession property.
     */
    public set msdyn_salesroutingrun_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_salesroutingrun_ProcessSession = value;
    };
    /**
     * Gets the msdyn_salesroutingrun_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_salesroutingrun_SyncErrors() {
        return this._msdyn_salesroutingrun_SyncErrors;
    };
    /**
     * Sets the msdyn_salesroutingrun_SyncErrors property value. 
     * @param value Value to set for the msdyn_salesroutingrun_SyncErrors property.
     */
    public set msdyn_salesroutingrun_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_salesroutingrun_SyncErrors = value;
    };
    /**
     * Gets the msdyn_salesroutingrunid property value. 
     * @returns a string
     */
    public get msdyn_salesroutingrunid() {
        return this._msdyn_salesroutingrunid;
    };
    /**
     * Sets the msdyn_salesroutingrunid property value. 
     * @param value Value to set for the msdyn_salesroutingrunid property.
     */
    public set msdyn_salesroutingrunid(value: string | undefined) {
        this._msdyn_salesroutingrunid = value;
    };
    /**
     * Gets the msdyn_segmentid property value. 
     * @returns a msdyn_segment
     */
    public get msdyn_segmentid() {
        return this._msdyn_segmentid;
    };
    /**
     * Sets the msdyn_segmentid property value. 
     * @param value Value to set for the msdyn_segmentid property.
     */
    public set msdyn_segmentid(value: Msdyn_segment | undefined) {
        this._msdyn_segmentid = value;
    };
    /**
     * Gets the msdyn_targetobject_lead property value. 
     * @returns a lead
     */
    public get msdyn_targetobject_lead() {
        return this._msdyn_targetobject_lead;
    };
    /**
     * Sets the msdyn_targetobject_lead property value. 
     * @param value Value to set for the msdyn_targetobject_lead property.
     */
    public set msdyn_targetobject_lead(value: Lead | undefined) {
        this._msdyn_targetobject_lead = value;
    };
    /**
     * Gets the msdyn_targetobject_opportunity property value. 
     * @returns a opportunity
     */
    public get msdyn_targetobject_opportunity() {
        return this._msdyn_targetobject_opportunity;
    };
    /**
     * Sets the msdyn_targetobject_opportunity property value. 
     * @param value Value to set for the msdyn_targetobject_opportunity property.
     */
    public set msdyn_targetobject_opportunity(value: Opportunity | undefined) {
        this._msdyn_targetobject_opportunity = value;
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
        writer.writeStringValue("_msdyn_assignmentruleid_value", this._msdyn_assignmentruleid_value);
        writer.writeStringValue("_msdyn_ownerassigned_value", this._msdyn_ownerassigned_value);
        writer.writeStringValue("_msdyn_segmentid_value", this._msdyn_segmentid_value);
        writer.writeStringValue("_msdyn_targetobject_value", this._msdyn_targetobject_value);
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
        writer.writeObjectValue<Msdyn_assignmentrule>("msdyn_assignmentruleid", this.msdyn_assignmentruleid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Systemuser>("msdyn_ownerassigned_systemuser", this.msdyn_ownerassigned_systemuser);
        writer.writeObjectValue<Team>("msdyn_ownerassigned_team", this.msdyn_ownerassigned_team);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_salesroutingrun_AsyncOperations", this.msdyn_salesroutingrun_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_salesroutingrun_BulkDeleteFailures", this.msdyn_salesroutingrun_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_salesroutingrun_DuplicateBaseRecord", this.msdyn_salesroutingrun_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_salesroutingrun_DuplicateMatchingRecord", this.msdyn_salesroutingrun_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_salesroutingrun_MailboxTrackingFolders", this.msdyn_salesroutingrun_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_salesroutingrun_PrincipalObjectAttributeAccesses", this.msdyn_salesroutingrun_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_salesroutingrun_ProcessSession", this.msdyn_salesroutingrun_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_salesroutingrun_SyncErrors", this.msdyn_salesroutingrun_SyncErrors);
        writer.writeStringValue("msdyn_salesroutingrunid", this.msdyn_salesroutingrunid);
        writer.writeObjectValue<Msdyn_segment>("msdyn_segmentid", this.msdyn_segmentid);
        writer.writeObjectValue<Lead>("msdyn_targetobject_lead", this.msdyn_targetobject_lead);
        writer.writeObjectValue<Opportunity>("msdyn_targetobject_opportunity", this.msdyn_targetobject_opportunity);
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
