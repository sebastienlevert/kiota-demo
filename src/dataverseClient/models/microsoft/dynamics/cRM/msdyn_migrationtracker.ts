import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSlaitemFromDiscriminatorValue} from './createSlaitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Sla, Slaitem, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_migrationtracker extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_legacyconvertruleid_value?: string | undefined;
    private __msdyn_legacyconvertruleitemid_value?: string | undefined;
    private __msdyn_legacyslaid_value?: string | undefined;
    private __msdyn_legacyslaitemid_value?: string | undefined;
    private __msdyn_modernconvertruleid_value?: string | undefined;
    private __msdyn_modernconvertruleitemid_value?: string | undefined;
    private __msdyn_modernslaid_value?: string | undefined;
    private __msdyn_modernslaitemid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _correlationid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_correlationid?: string | undefined;
    private _msdyn_IsMigrationComplete?: boolean | undefined;
    private _msdyn_legacyruleidname?: string | undefined;
    private _msdyn_legacyruleidtype?: string | undefined;
    private _msdyn_legacyruleitemidname?: string | undefined;
    private _msdyn_legacyruleitemidtype?: string | undefined;
    private _msdyn_LegacySLAId?: Sla | undefined;
    private _msdyn_LegacySLAItemId?: Slaitem | undefined;
    private _msdyn_migrationstatus?: number | undefined;
    private _msdyn_migrationstatusexception?: string | undefined;
    private _msdyn_migrationstatusreason?: string | undefined;
    private _msdyn_migrationtracker_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_migrationtracker_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_migrationtracker_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_migrationtracker_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_migrationtracker_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_migrationtracker_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_migrationtracker_ProcessSession?: Processsession[] | undefined;
    private _msdyn_migrationtracker_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_migrationtrackerid?: string | undefined;
    private _msdyn_migrationtype?: number | undefined;
    private _msdyn_modernruleidname?: string | undefined;
    private _msdyn_modernruleidtype?: string | undefined;
    private _msdyn_modernruleitemidname?: string | undefined;
    private _msdyn_modernruleitemidtype?: string | undefined;
    private _msdyn_ModernSLAId?: Sla | undefined;
    private _msdyn_ModernSLAItemId?: Slaitem | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_objecttypecode?: string | undefined;
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
     * Gets the _msdyn_legacyconvertruleid_value property value. 
     * @returns a string
     */
    public get _msdyn_legacyconvertruleid_value() {
        return this.__msdyn_legacyconvertruleid_value;
    };
    /**
     * Sets the _msdyn_legacyconvertruleid_value property value. 
     * @param value Value to set for the _msdyn_legacyconvertruleid_value property.
     */
    public set _msdyn_legacyconvertruleid_value(value: string | undefined) {
        this.__msdyn_legacyconvertruleid_value = value;
    };
    /**
     * Gets the _msdyn_legacyconvertruleitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_legacyconvertruleitemid_value() {
        return this.__msdyn_legacyconvertruleitemid_value;
    };
    /**
     * Sets the _msdyn_legacyconvertruleitemid_value property value. 
     * @param value Value to set for the _msdyn_legacyconvertruleitemid_value property.
     */
    public set _msdyn_legacyconvertruleitemid_value(value: string | undefined) {
        this.__msdyn_legacyconvertruleitemid_value = value;
    };
    /**
     * Gets the _msdyn_legacyslaid_value property value. 
     * @returns a string
     */
    public get _msdyn_legacyslaid_value() {
        return this.__msdyn_legacyslaid_value;
    };
    /**
     * Sets the _msdyn_legacyslaid_value property value. 
     * @param value Value to set for the _msdyn_legacyslaid_value property.
     */
    public set _msdyn_legacyslaid_value(value: string | undefined) {
        this.__msdyn_legacyslaid_value = value;
    };
    /**
     * Gets the _msdyn_legacyslaitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_legacyslaitemid_value() {
        return this.__msdyn_legacyslaitemid_value;
    };
    /**
     * Sets the _msdyn_legacyslaitemid_value property value. 
     * @param value Value to set for the _msdyn_legacyslaitemid_value property.
     */
    public set _msdyn_legacyslaitemid_value(value: string | undefined) {
        this.__msdyn_legacyslaitemid_value = value;
    };
    /**
     * Gets the _msdyn_modernconvertruleid_value property value. 
     * @returns a string
     */
    public get _msdyn_modernconvertruleid_value() {
        return this.__msdyn_modernconvertruleid_value;
    };
    /**
     * Sets the _msdyn_modernconvertruleid_value property value. 
     * @param value Value to set for the _msdyn_modernconvertruleid_value property.
     */
    public set _msdyn_modernconvertruleid_value(value: string | undefined) {
        this.__msdyn_modernconvertruleid_value = value;
    };
    /**
     * Gets the _msdyn_modernconvertruleitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_modernconvertruleitemid_value() {
        return this.__msdyn_modernconvertruleitemid_value;
    };
    /**
     * Sets the _msdyn_modernconvertruleitemid_value property value. 
     * @param value Value to set for the _msdyn_modernconvertruleitemid_value property.
     */
    public set _msdyn_modernconvertruleitemid_value(value: string | undefined) {
        this.__msdyn_modernconvertruleitemid_value = value;
    };
    /**
     * Gets the _msdyn_modernslaid_value property value. 
     * @returns a string
     */
    public get _msdyn_modernslaid_value() {
        return this.__msdyn_modernslaid_value;
    };
    /**
     * Sets the _msdyn_modernslaid_value property value. 
     * @param value Value to set for the _msdyn_modernslaid_value property.
     */
    public set _msdyn_modernslaid_value(value: string | undefined) {
        this.__msdyn_modernslaid_value = value;
    };
    /**
     * Gets the _msdyn_modernslaitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_modernslaitemid_value() {
        return this.__msdyn_modernslaitemid_value;
    };
    /**
     * Sets the _msdyn_modernslaitemid_value property value. 
     * @param value Value to set for the _msdyn_modernslaitemid_value property.
     */
    public set _msdyn_modernslaitemid_value(value: string | undefined) {
        this.__msdyn_modernslaitemid_value = value;
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
     * Instantiates a new msdyn_migrationtracker and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the correlationid property value. 
     * @returns a string
     */
    public get correlationid() {
        return this._correlationid;
    };
    /**
     * Sets the correlationid property value. 
     * @param value Value to set for the correlationid property.
     */
    public set correlationid(value: string | undefined) {
        this._correlationid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_legacyconvertruleid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_legacyconvertruleid_value = n.getStringValue(); },
            "_msdyn_legacyconvertruleitemid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_legacyconvertruleitemid_value = n.getStringValue(); },
            "_msdyn_legacyslaid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_legacyslaid_value = n.getStringValue(); },
            "_msdyn_legacyslaitemid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_legacyslaitemid_value = n.getStringValue(); },
            "_msdyn_modernconvertruleid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_modernconvertruleid_value = n.getStringValue(); },
            "_msdyn_modernconvertruleitemid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_modernconvertruleitemid_value = n.getStringValue(); },
            "_msdyn_modernslaid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_modernslaid_value = n.getStringValue(); },
            "_msdyn_modernslaitemid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._msdyn_modernslaitemid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_migrationtracker)._owninguser_value = n.getStringValue(); },
            "correlationid": (o, n) => { (o as unknown as Msdyn_migrationtracker).correlationid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_migrationtracker).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_migrationtracker).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_migrationtracker).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_migrationtracker).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_migrationtracker).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_migrationtracker).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_migrationtracker).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_correlationid": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_correlationid = n.getStringValue(); },
            "msdyn_IsMigrationComplete": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_IsMigrationComplete = n.getBooleanValue(); },
            "msdyn_legacyruleidname": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_legacyruleidname = n.getStringValue(); },
            "msdyn_legacyruleidtype": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_legacyruleidtype = n.getStringValue(); },
            "msdyn_legacyruleitemidname": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_legacyruleitemidname = n.getStringValue(); },
            "msdyn_legacyruleitemidtype": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_legacyruleitemidtype = n.getStringValue(); },
            "msdyn_LegacySLAId": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_LegacySLAId = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "msdyn_LegacySLAItemId": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_LegacySLAItemId = n.getObjectValue<Slaitem>(createSlaitemFromDiscriminatorValue); },
            "msdyn_migrationstatus": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationstatus = n.getNumberValue(); },
            "msdyn_migrationstatusexception": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationstatusexception = n.getStringValue(); },
            "msdyn_migrationstatusreason": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationstatusreason = n.getStringValue(); },
            "msdyn_migrationtracker_AsyncOperations": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_migrationtracker_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_migrationtracker_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_migrationtracker_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_migrationtracker_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_migrationtracker_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_migrationtracker_ProcessSession": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_migrationtracker_SyncErrors": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtracker_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_migrationtrackerid": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtrackerid = n.getStringValue(); },
            "msdyn_migrationtype": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_migrationtype = n.getNumberValue(); },
            "msdyn_modernruleidname": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_modernruleidname = n.getStringValue(); },
            "msdyn_modernruleidtype": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_modernruleidtype = n.getStringValue(); },
            "msdyn_modernruleitemidname": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_modernruleitemidname = n.getStringValue(); },
            "msdyn_modernruleitemidtype": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_modernruleitemidtype = n.getStringValue(); },
            "msdyn_ModernSLAId": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_ModernSLAId = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "msdyn_ModernSLAItemId": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_ModernSLAItemId = n.getObjectValue<Slaitem>(createSlaitemFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_name = n.getStringValue(); },
            "msdyn_objecttypecode": (o, n) => { (o as unknown as Msdyn_migrationtracker).msdyn_objecttypecode = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_migrationtracker).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_migrationtracker).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_migrationtracker).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_migrationtracker).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_migrationtracker).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_migrationtracker).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_migrationtracker).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_migrationtracker).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_migrationtracker).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_migrationtracker).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_correlationid property value. 
     * @returns a string
     */
    public get msdyn_correlationid() {
        return this._msdyn_correlationid;
    };
    /**
     * Sets the msdyn_correlationid property value. 
     * @param value Value to set for the msdyn_correlationid property.
     */
    public set msdyn_correlationid(value: string | undefined) {
        this._msdyn_correlationid = value;
    };
    /**
     * Gets the msdyn_IsMigrationComplete property value. 
     * @returns a boolean
     */
    public get msdyn_IsMigrationComplete() {
        return this._msdyn_IsMigrationComplete;
    };
    /**
     * Sets the msdyn_IsMigrationComplete property value. 
     * @param value Value to set for the msdyn_IsMigrationComplete property.
     */
    public set msdyn_IsMigrationComplete(value: boolean | undefined) {
        this._msdyn_IsMigrationComplete = value;
    };
    /**
     * Gets the msdyn_legacyruleidname property value. 
     * @returns a string
     */
    public get msdyn_legacyruleidname() {
        return this._msdyn_legacyruleidname;
    };
    /**
     * Sets the msdyn_legacyruleidname property value. 
     * @param value Value to set for the msdyn_legacyruleidname property.
     */
    public set msdyn_legacyruleidname(value: string | undefined) {
        this._msdyn_legacyruleidname = value;
    };
    /**
     * Gets the msdyn_legacyruleidtype property value. 
     * @returns a string
     */
    public get msdyn_legacyruleidtype() {
        return this._msdyn_legacyruleidtype;
    };
    /**
     * Sets the msdyn_legacyruleidtype property value. 
     * @param value Value to set for the msdyn_legacyruleidtype property.
     */
    public set msdyn_legacyruleidtype(value: string | undefined) {
        this._msdyn_legacyruleidtype = value;
    };
    /**
     * Gets the msdyn_legacyruleitemidname property value. 
     * @returns a string
     */
    public get msdyn_legacyruleitemidname() {
        return this._msdyn_legacyruleitemidname;
    };
    /**
     * Sets the msdyn_legacyruleitemidname property value. 
     * @param value Value to set for the msdyn_legacyruleitemidname property.
     */
    public set msdyn_legacyruleitemidname(value: string | undefined) {
        this._msdyn_legacyruleitemidname = value;
    };
    /**
     * Gets the msdyn_legacyruleitemidtype property value. 
     * @returns a string
     */
    public get msdyn_legacyruleitemidtype() {
        return this._msdyn_legacyruleitemidtype;
    };
    /**
     * Sets the msdyn_legacyruleitemidtype property value. 
     * @param value Value to set for the msdyn_legacyruleitemidtype property.
     */
    public set msdyn_legacyruleitemidtype(value: string | undefined) {
        this._msdyn_legacyruleitemidtype = value;
    };
    /**
     * Gets the msdyn_LegacySLAId property value. 
     * @returns a sla
     */
    public get msdyn_LegacySLAId() {
        return this._msdyn_LegacySLAId;
    };
    /**
     * Sets the msdyn_LegacySLAId property value. 
     * @param value Value to set for the msdyn_LegacySLAId property.
     */
    public set msdyn_LegacySLAId(value: Sla | undefined) {
        this._msdyn_LegacySLAId = value;
    };
    /**
     * Gets the msdyn_LegacySLAItemId property value. 
     * @returns a slaitem
     */
    public get msdyn_LegacySLAItemId() {
        return this._msdyn_LegacySLAItemId;
    };
    /**
     * Sets the msdyn_LegacySLAItemId property value. 
     * @param value Value to set for the msdyn_LegacySLAItemId property.
     */
    public set msdyn_LegacySLAItemId(value: Slaitem | undefined) {
        this._msdyn_LegacySLAItemId = value;
    };
    /**
     * Gets the msdyn_migrationstatus property value. 
     * @returns a integer
     */
    public get msdyn_migrationstatus() {
        return this._msdyn_migrationstatus;
    };
    /**
     * Sets the msdyn_migrationstatus property value. 
     * @param value Value to set for the msdyn_migrationstatus property.
     */
    public set msdyn_migrationstatus(value: number | undefined) {
        this._msdyn_migrationstatus = value;
    };
    /**
     * Gets the msdyn_migrationstatusexception property value. 
     * @returns a string
     */
    public get msdyn_migrationstatusexception() {
        return this._msdyn_migrationstatusexception;
    };
    /**
     * Sets the msdyn_migrationstatusexception property value. 
     * @param value Value to set for the msdyn_migrationstatusexception property.
     */
    public set msdyn_migrationstatusexception(value: string | undefined) {
        this._msdyn_migrationstatusexception = value;
    };
    /**
     * Gets the msdyn_migrationstatusreason property value. 
     * @returns a string
     */
    public get msdyn_migrationstatusreason() {
        return this._msdyn_migrationstatusreason;
    };
    /**
     * Sets the msdyn_migrationstatusreason property value. 
     * @param value Value to set for the msdyn_migrationstatusreason property.
     */
    public set msdyn_migrationstatusreason(value: string | undefined) {
        this._msdyn_migrationstatusreason = value;
    };
    /**
     * Gets the msdyn_migrationtracker_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_migrationtracker_AsyncOperations() {
        return this._msdyn_migrationtracker_AsyncOperations;
    };
    /**
     * Sets the msdyn_migrationtracker_AsyncOperations property value. 
     * @param value Value to set for the msdyn_migrationtracker_AsyncOperations property.
     */
    public set msdyn_migrationtracker_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_migrationtracker_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_migrationtracker_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_migrationtracker_BulkDeleteFailures() {
        return this._msdyn_migrationtracker_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_migrationtracker_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_migrationtracker_BulkDeleteFailures property.
     */
    public set msdyn_migrationtracker_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_migrationtracker_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_migrationtracker_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_migrationtracker_DuplicateBaseRecord() {
        return this._msdyn_migrationtracker_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_migrationtracker_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_migrationtracker_DuplicateBaseRecord property.
     */
    public set msdyn_migrationtracker_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_migrationtracker_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_migrationtracker_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_migrationtracker_DuplicateMatchingRecord() {
        return this._msdyn_migrationtracker_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_migrationtracker_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_migrationtracker_DuplicateMatchingRecord property.
     */
    public set msdyn_migrationtracker_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_migrationtracker_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_migrationtracker_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_migrationtracker_MailboxTrackingFolders() {
        return this._msdyn_migrationtracker_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_migrationtracker_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_migrationtracker_MailboxTrackingFolders property.
     */
    public set msdyn_migrationtracker_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_migrationtracker_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_migrationtracker_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_migrationtracker_PrincipalObjectAttributeAccesses() {
        return this._msdyn_migrationtracker_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_migrationtracker_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_migrationtracker_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_migrationtracker_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_migrationtracker_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_migrationtracker_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_migrationtracker_ProcessSession() {
        return this._msdyn_migrationtracker_ProcessSession;
    };
    /**
     * Sets the msdyn_migrationtracker_ProcessSession property value. 
     * @param value Value to set for the msdyn_migrationtracker_ProcessSession property.
     */
    public set msdyn_migrationtracker_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_migrationtracker_ProcessSession = value;
    };
    /**
     * Gets the msdyn_migrationtracker_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_migrationtracker_SyncErrors() {
        return this._msdyn_migrationtracker_SyncErrors;
    };
    /**
     * Sets the msdyn_migrationtracker_SyncErrors property value. 
     * @param value Value to set for the msdyn_migrationtracker_SyncErrors property.
     */
    public set msdyn_migrationtracker_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_migrationtracker_SyncErrors = value;
    };
    /**
     * Gets the msdyn_migrationtrackerid property value. 
     * @returns a string
     */
    public get msdyn_migrationtrackerid() {
        return this._msdyn_migrationtrackerid;
    };
    /**
     * Sets the msdyn_migrationtrackerid property value. 
     * @param value Value to set for the msdyn_migrationtrackerid property.
     */
    public set msdyn_migrationtrackerid(value: string | undefined) {
        this._msdyn_migrationtrackerid = value;
    };
    /**
     * Gets the msdyn_migrationtype property value. 
     * @returns a integer
     */
    public get msdyn_migrationtype() {
        return this._msdyn_migrationtype;
    };
    /**
     * Sets the msdyn_migrationtype property value. 
     * @param value Value to set for the msdyn_migrationtype property.
     */
    public set msdyn_migrationtype(value: number | undefined) {
        this._msdyn_migrationtype = value;
    };
    /**
     * Gets the msdyn_modernruleidname property value. 
     * @returns a string
     */
    public get msdyn_modernruleidname() {
        return this._msdyn_modernruleidname;
    };
    /**
     * Sets the msdyn_modernruleidname property value. 
     * @param value Value to set for the msdyn_modernruleidname property.
     */
    public set msdyn_modernruleidname(value: string | undefined) {
        this._msdyn_modernruleidname = value;
    };
    /**
     * Gets the msdyn_modernruleidtype property value. 
     * @returns a string
     */
    public get msdyn_modernruleidtype() {
        return this._msdyn_modernruleidtype;
    };
    /**
     * Sets the msdyn_modernruleidtype property value. 
     * @param value Value to set for the msdyn_modernruleidtype property.
     */
    public set msdyn_modernruleidtype(value: string | undefined) {
        this._msdyn_modernruleidtype = value;
    };
    /**
     * Gets the msdyn_modernruleitemidname property value. 
     * @returns a string
     */
    public get msdyn_modernruleitemidname() {
        return this._msdyn_modernruleitemidname;
    };
    /**
     * Sets the msdyn_modernruleitemidname property value. 
     * @param value Value to set for the msdyn_modernruleitemidname property.
     */
    public set msdyn_modernruleitemidname(value: string | undefined) {
        this._msdyn_modernruleitemidname = value;
    };
    /**
     * Gets the msdyn_modernruleitemidtype property value. 
     * @returns a string
     */
    public get msdyn_modernruleitemidtype() {
        return this._msdyn_modernruleitemidtype;
    };
    /**
     * Sets the msdyn_modernruleitemidtype property value. 
     * @param value Value to set for the msdyn_modernruleitemidtype property.
     */
    public set msdyn_modernruleitemidtype(value: string | undefined) {
        this._msdyn_modernruleitemidtype = value;
    };
    /**
     * Gets the msdyn_ModernSLAId property value. 
     * @returns a sla
     */
    public get msdyn_ModernSLAId() {
        return this._msdyn_ModernSLAId;
    };
    /**
     * Sets the msdyn_ModernSLAId property value. 
     * @param value Value to set for the msdyn_ModernSLAId property.
     */
    public set msdyn_ModernSLAId(value: Sla | undefined) {
        this._msdyn_ModernSLAId = value;
    };
    /**
     * Gets the msdyn_ModernSLAItemId property value. 
     * @returns a slaitem
     */
    public get msdyn_ModernSLAItemId() {
        return this._msdyn_ModernSLAItemId;
    };
    /**
     * Sets the msdyn_ModernSLAItemId property value. 
     * @param value Value to set for the msdyn_ModernSLAItemId property.
     */
    public set msdyn_ModernSLAItemId(value: Slaitem | undefined) {
        this._msdyn_ModernSLAItemId = value;
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
     * Gets the msdyn_objecttypecode property value. 
     * @returns a string
     */
    public get msdyn_objecttypecode() {
        return this._msdyn_objecttypecode;
    };
    /**
     * Sets the msdyn_objecttypecode property value. 
     * @param value Value to set for the msdyn_objecttypecode property.
     */
    public set msdyn_objecttypecode(value: string | undefined) {
        this._msdyn_objecttypecode = value;
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
        writer.writeStringValue("_msdyn_legacyconvertruleid_value", this._msdyn_legacyconvertruleid_value);
        writer.writeStringValue("_msdyn_legacyconvertruleitemid_value", this._msdyn_legacyconvertruleitemid_value);
        writer.writeStringValue("_msdyn_legacyslaid_value", this._msdyn_legacyslaid_value);
        writer.writeStringValue("_msdyn_legacyslaitemid_value", this._msdyn_legacyslaitemid_value);
        writer.writeStringValue("_msdyn_modernconvertruleid_value", this._msdyn_modernconvertruleid_value);
        writer.writeStringValue("_msdyn_modernconvertruleitemid_value", this._msdyn_modernconvertruleitemid_value);
        writer.writeStringValue("_msdyn_modernslaid_value", this._msdyn_modernslaid_value);
        writer.writeStringValue("_msdyn_modernslaitemid_value", this._msdyn_modernslaitemid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("correlationid", this.correlationid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_correlationid", this.msdyn_correlationid);
        writer.writeBooleanValue("msdyn_IsMigrationComplete", this.msdyn_IsMigrationComplete);
        writer.writeStringValue("msdyn_legacyruleidname", this.msdyn_legacyruleidname);
        writer.writeStringValue("msdyn_legacyruleidtype", this.msdyn_legacyruleidtype);
        writer.writeStringValue("msdyn_legacyruleitemidname", this.msdyn_legacyruleitemidname);
        writer.writeStringValue("msdyn_legacyruleitemidtype", this.msdyn_legacyruleitemidtype);
        writer.writeObjectValue<Sla>("msdyn_LegacySLAId", this.msdyn_LegacySLAId);
        writer.writeObjectValue<Slaitem>("msdyn_LegacySLAItemId", this.msdyn_LegacySLAItemId);
        writer.writeNumberValue("msdyn_migrationstatus", this.msdyn_migrationstatus);
        writer.writeStringValue("msdyn_migrationstatusexception", this.msdyn_migrationstatusexception);
        writer.writeStringValue("msdyn_migrationstatusreason", this.msdyn_migrationstatusreason);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_migrationtracker_AsyncOperations", this.msdyn_migrationtracker_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_migrationtracker_BulkDeleteFailures", this.msdyn_migrationtracker_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_migrationtracker_DuplicateBaseRecord", this.msdyn_migrationtracker_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_migrationtracker_DuplicateMatchingRecord", this.msdyn_migrationtracker_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_migrationtracker_MailboxTrackingFolders", this.msdyn_migrationtracker_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_migrationtracker_PrincipalObjectAttributeAccesses", this.msdyn_migrationtracker_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_migrationtracker_ProcessSession", this.msdyn_migrationtracker_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_migrationtracker_SyncErrors", this.msdyn_migrationtracker_SyncErrors);
        writer.writeStringValue("msdyn_migrationtrackerid", this.msdyn_migrationtrackerid);
        writer.writeNumberValue("msdyn_migrationtype", this.msdyn_migrationtype);
        writer.writeStringValue("msdyn_modernruleidname", this.msdyn_modernruleidname);
        writer.writeStringValue("msdyn_modernruleidtype", this.msdyn_modernruleidtype);
        writer.writeStringValue("msdyn_modernruleitemidname", this.msdyn_modernruleitemidname);
        writer.writeStringValue("msdyn_modernruleitemidtype", this.msdyn_modernruleitemidtype);
        writer.writeObjectValue<Sla>("msdyn_ModernSLAId", this.msdyn_ModernSLAId);
        writer.writeObjectValue<Slaitem>("msdyn_ModernSLAItemId", this.msdyn_ModernSLAItemId);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_objecttypecode", this.msdyn_objecttypecode);
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
