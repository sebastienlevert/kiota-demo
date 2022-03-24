import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_projectFromDiscriminatorValue} from './createMsfp_projectFromDiscriminatorValue';
import {createMsfp_satisfactionmetricFromDiscriminatorValue} from './createMsfp_satisfactionmetricFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msfp_alert, Msfp_project, Msfp_satisfactionmetric, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_alertrule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_project_value?: string | undefined;
    private __msfp_satisfactionmetric_value?: string | undefined;
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
    private _msfp_alertrule_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_alertrule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_alertrule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msfp_alertrule_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msfp_alertrule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_alertrule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_alertrule_ProcessSession?: Processsession[] | undefined;
    private _msfp_alertrule_SyncErrors?: Syncerror[] | undefined;
    private _msfp_alertruleid?: string | undefined;
    private _msfp_expression?: string | undefined;
    private _msfp_msfp_alertrule_msfp_alert_alertrule?: Msfp_alert[] | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_project?: Msfp_project | undefined;
    private _msfp_satisfactionmetric?: Msfp_satisfactionmetric | undefined;
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
     * Gets the _msfp_project_value property value. 
     * @returns a string
     */
    public get _msfp_project_value() {
        return this.__msfp_project_value;
    };
    /**
     * Sets the _msfp_project_value property value. 
     * @param value Value to set for the _msfp_project_value property.
     */
    public set _msfp_project_value(value: string | undefined) {
        this.__msfp_project_value = value;
    };
    /**
     * Gets the _msfp_satisfactionmetric_value property value. 
     * @returns a string
     */
    public get _msfp_satisfactionmetric_value() {
        return this.__msfp_satisfactionmetric_value;
    };
    /**
     * Sets the _msfp_satisfactionmetric_value property value. 
     * @param value Value to set for the _msfp_satisfactionmetric_value property.
     */
    public set _msfp_satisfactionmetric_value(value: string | undefined) {
        this.__msfp_satisfactionmetric_value = value;
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
     * Instantiates a new msfp_alertrule and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_alertrule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_alertrule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_alertrule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_alertrule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_project_value": (o, n) => { (o as unknown as Msfp_alertrule)._msfp_project_value = n.getStringValue(); },
            "_msfp_satisfactionmetric_value": (o, n) => { (o as unknown as Msfp_alertrule)._msfp_satisfactionmetric_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_alertrule)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_alertrule)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_alertrule)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_alertrule)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_alertrule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_alertrule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_alertrule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_alertrule).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_alertrule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_alertrule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_alertrule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_alertrule_AsyncOperations": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_alertrule_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_alertrule_DuplicateBaseRecord": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msfp_alertrule_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msfp_alertrule_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_alertrule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_alertrule_ProcessSession": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_alertrule_SyncErrors": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertrule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_alertruleid": (o, n) => { (o as unknown as Msfp_alertrule).msfp_alertruleid = n.getStringValue(); },
            "msfp_expression": (o, n) => { (o as unknown as Msfp_alertrule).msfp_expression = n.getStringValue(); },
            "msfp_msfp_alertrule_msfp_alert_alertrule": (o, n) => { (o as unknown as Msfp_alertrule).msfp_msfp_alertrule_msfp_alert_alertrule = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_alertrule).msfp_name = n.getStringValue(); },
            "msfp_project": (o, n) => { (o as unknown as Msfp_alertrule).msfp_project = n.getObjectValue<Msfp_project>(createMsfp_projectFromDiscriminatorValue); },
            "msfp_satisfactionmetric": (o, n) => { (o as unknown as Msfp_alertrule).msfp_satisfactionmetric = n.getObjectValue<Msfp_satisfactionmetric>(createMsfp_satisfactionmetricFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_alertrule).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_alertrule).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_alertrule).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_alertrule).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_alertrule).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_alertrule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_alertrule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_alertrule).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_alertrule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_alertrule).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_alertrule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_alertrule_AsyncOperations() {
        return this._msfp_alertrule_AsyncOperations;
    };
    /**
     * Sets the msfp_alertrule_AsyncOperations property value. 
     * @param value Value to set for the msfp_alertrule_AsyncOperations property.
     */
    public set msfp_alertrule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_alertrule_AsyncOperations = value;
    };
    /**
     * Gets the msfp_alertrule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_alertrule_BulkDeleteFailures() {
        return this._msfp_alertrule_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_alertrule_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_alertrule_BulkDeleteFailures property.
     */
    public set msfp_alertrule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_alertrule_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_alertrule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msfp_alertrule_DuplicateBaseRecord() {
        return this._msfp_alertrule_DuplicateBaseRecord;
    };
    /**
     * Sets the msfp_alertrule_DuplicateBaseRecord property value. 
     * @param value Value to set for the msfp_alertrule_DuplicateBaseRecord property.
     */
    public set msfp_alertrule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msfp_alertrule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msfp_alertrule_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msfp_alertrule_DuplicateMatchingRecord() {
        return this._msfp_alertrule_DuplicateMatchingRecord;
    };
    /**
     * Sets the msfp_alertrule_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msfp_alertrule_DuplicateMatchingRecord property.
     */
    public set msfp_alertrule_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msfp_alertrule_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msfp_alertrule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_alertrule_MailboxTrackingFolders() {
        return this._msfp_alertrule_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_alertrule_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_alertrule_MailboxTrackingFolders property.
     */
    public set msfp_alertrule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_alertrule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_alertrule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_alertrule_PrincipalObjectAttributeAccesses() {
        return this._msfp_alertrule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_alertrule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_alertrule_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_alertrule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_alertrule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_alertrule_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_alertrule_ProcessSession() {
        return this._msfp_alertrule_ProcessSession;
    };
    /**
     * Sets the msfp_alertrule_ProcessSession property value. 
     * @param value Value to set for the msfp_alertrule_ProcessSession property.
     */
    public set msfp_alertrule_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_alertrule_ProcessSession = value;
    };
    /**
     * Gets the msfp_alertrule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_alertrule_SyncErrors() {
        return this._msfp_alertrule_SyncErrors;
    };
    /**
     * Sets the msfp_alertrule_SyncErrors property value. 
     * @param value Value to set for the msfp_alertrule_SyncErrors property.
     */
    public set msfp_alertrule_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_alertrule_SyncErrors = value;
    };
    /**
     * Gets the msfp_alertruleid property value. 
     * @returns a string
     */
    public get msfp_alertruleid() {
        return this._msfp_alertruleid;
    };
    /**
     * Sets the msfp_alertruleid property value. 
     * @param value Value to set for the msfp_alertruleid property.
     */
    public set msfp_alertruleid(value: string | undefined) {
        this._msfp_alertruleid = value;
    };
    /**
     * Gets the msfp_expression property value. 
     * @returns a string
     */
    public get msfp_expression() {
        return this._msfp_expression;
    };
    /**
     * Sets the msfp_expression property value. 
     * @param value Value to set for the msfp_expression property.
     */
    public set msfp_expression(value: string | undefined) {
        this._msfp_expression = value;
    };
    /**
     * Gets the msfp_msfp_alertrule_msfp_alert_alertrule property value. 
     * @returns a msfp_alert
     */
    public get msfp_msfp_alertrule_msfp_alert_alertrule() {
        return this._msfp_msfp_alertrule_msfp_alert_alertrule;
    };
    /**
     * Sets the msfp_msfp_alertrule_msfp_alert_alertrule property value. 
     * @param value Value to set for the msfp_msfp_alertrule_msfp_alert_alertrule property.
     */
    public set msfp_msfp_alertrule_msfp_alert_alertrule(value: Msfp_alert[] | undefined) {
        this._msfp_msfp_alertrule_msfp_alert_alertrule = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_project property value. 
     * @returns a msfp_project
     */
    public get msfp_project() {
        return this._msfp_project;
    };
    /**
     * Sets the msfp_project property value. 
     * @param value Value to set for the msfp_project property.
     */
    public set msfp_project(value: Msfp_project | undefined) {
        this._msfp_project = value;
    };
    /**
     * Gets the msfp_satisfactionmetric property value. 
     * @returns a msfp_satisfactionmetric
     */
    public get msfp_satisfactionmetric() {
        return this._msfp_satisfactionmetric;
    };
    /**
     * Sets the msfp_satisfactionmetric property value. 
     * @param value Value to set for the msfp_satisfactionmetric property.
     */
    public set msfp_satisfactionmetric(value: Msfp_satisfactionmetric | undefined) {
        this._msfp_satisfactionmetric = value;
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
        writer.writeStringValue("_msfp_project_value", this._msfp_project_value);
        writer.writeStringValue("_msfp_satisfactionmetric_value", this._msfp_satisfactionmetric_value);
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_alertrule_AsyncOperations", this.msfp_alertrule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_alertrule_BulkDeleteFailures", this.msfp_alertrule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msfp_alertrule_DuplicateBaseRecord", this.msfp_alertrule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msfp_alertrule_DuplicateMatchingRecord", this.msfp_alertrule_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_alertrule_MailboxTrackingFolders", this.msfp_alertrule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_alertrule_PrincipalObjectAttributeAccesses", this.msfp_alertrule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_alertrule_ProcessSession", this.msfp_alertrule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_alertrule_SyncErrors", this.msfp_alertrule_SyncErrors);
        writer.writeStringValue("msfp_alertruleid", this.msfp_alertruleid);
        writer.writeStringValue("msfp_expression", this.msfp_expression);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_msfp_alertrule_msfp_alert_alertrule", this.msfp_msfp_alertrule_msfp_alert_alertrule);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeObjectValue<Msfp_project>("msfp_project", this.msfp_project);
        writer.writeObjectValue<Msfp_satisfactionmetric>("msfp_satisfactionmetric", this.msfp_satisfactionmetric);
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
