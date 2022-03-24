import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_taskFromDiscriminatorValue} from './createMsdyusd_taskFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyusd_task, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_scripttasktrigger extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyusd_triggerid_value?: string | undefined;
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
    private _msdyusd_name?: string | undefined;
    private _msdyusd_scripttasktrigger_Annotations?: Annotation[] | undefined;
    private _msdyusd_scripttasktrigger_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_scripttasktrigger_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_scripttasktrigger_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_scripttasktrigger_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_scripttasktrigger_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_scripttasktriggerdata?: string | undefined;
    private _msdyusd_scripttasktriggerid?: string | undefined;
    private _msdyusd_scripttasktriggertype?: number | undefined;
    private _msdyusd_TriggerId?: Msdyusd_task | undefined;
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
     * Gets the _msdyusd_triggerid_value property value. 
     * @returns a string
     */
    public get _msdyusd_triggerid_value() {
        return this.__msdyusd_triggerid_value;
    };
    /**
     * Sets the _msdyusd_triggerid_value property value. 
     * @param value Value to set for the _msdyusd_triggerid_value property.
     */
    public set _msdyusd_triggerid_value(value: string | undefined) {
        this.__msdyusd_triggerid_value = value;
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
     * Instantiates a new msdyusd_scripttasktrigger and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyusd_triggerid_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._msdyusd_triggerid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_name = n.getStringValue(); },
            "msdyusd_scripttasktrigger_Annotations": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyusd_scripttasktrigger_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_scripttasktrigger_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_scripttasktrigger_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_scripttasktrigger_ProcessSession": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_scripttasktrigger_SyncErrors": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktrigger_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_scripttasktriggerdata": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktriggerdata = n.getStringValue(); },
            "msdyusd_scripttasktriggerid": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktriggerid = n.getStringValue(); },
            "msdyusd_scripttasktriggertype": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_scripttasktriggertype = n.getNumberValue(); },
            "msdyusd_TriggerId": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).msdyusd_TriggerId = n.getObjectValue<Msdyusd_task>(createMsdyusd_taskFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_scripttasktrigger).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyusd_name property value. 
     * @returns a string
     */
    public get msdyusd_name() {
        return this._msdyusd_name;
    };
    /**
     * Sets the msdyusd_name property value. 
     * @param value Value to set for the msdyusd_name property.
     */
    public set msdyusd_name(value: string | undefined) {
        this._msdyusd_name = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_Annotations property value. 
     * @returns a annotation
     */
    public get msdyusd_scripttasktrigger_Annotations() {
        return this._msdyusd_scripttasktrigger_Annotations;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_Annotations property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_Annotations property.
     */
    public set msdyusd_scripttasktrigger_Annotations(value: Annotation[] | undefined) {
        this._msdyusd_scripttasktrigger_Annotations = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_scripttasktrigger_AsyncOperations() {
        return this._msdyusd_scripttasktrigger_AsyncOperations;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_AsyncOperations property.
     */
    public set msdyusd_scripttasktrigger_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_scripttasktrigger_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_scripttasktrigger_BulkDeleteFailures() {
        return this._msdyusd_scripttasktrigger_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_BulkDeleteFailures property.
     */
    public set msdyusd_scripttasktrigger_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_scripttasktrigger_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_scripttasktrigger_MailboxTrackingFolders() {
        return this._msdyusd_scripttasktrigger_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_MailboxTrackingFolders property.
     */
    public set msdyusd_scripttasktrigger_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_scripttasktrigger_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_scripttasktrigger_ProcessSession() {
        return this._msdyusd_scripttasktrigger_ProcessSession;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_ProcessSession property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_ProcessSession property.
     */
    public set msdyusd_scripttasktrigger_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_scripttasktrigger_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_scripttasktrigger_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_scripttasktrigger_SyncErrors() {
        return this._msdyusd_scripttasktrigger_SyncErrors;
    };
    /**
     * Sets the msdyusd_scripttasktrigger_SyncErrors property value. 
     * @param value Value to set for the msdyusd_scripttasktrigger_SyncErrors property.
     */
    public set msdyusd_scripttasktrigger_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_scripttasktrigger_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_scripttasktriggerdata property value. 
     * @returns a string
     */
    public get msdyusd_scripttasktriggerdata() {
        return this._msdyusd_scripttasktriggerdata;
    };
    /**
     * Sets the msdyusd_scripttasktriggerdata property value. 
     * @param value Value to set for the msdyusd_scripttasktriggerdata property.
     */
    public set msdyusd_scripttasktriggerdata(value: string | undefined) {
        this._msdyusd_scripttasktriggerdata = value;
    };
    /**
     * Gets the msdyusd_scripttasktriggerid property value. 
     * @returns a string
     */
    public get msdyusd_scripttasktriggerid() {
        return this._msdyusd_scripttasktriggerid;
    };
    /**
     * Sets the msdyusd_scripttasktriggerid property value. 
     * @param value Value to set for the msdyusd_scripttasktriggerid property.
     */
    public set msdyusd_scripttasktriggerid(value: string | undefined) {
        this._msdyusd_scripttasktriggerid = value;
    };
    /**
     * Gets the msdyusd_scripttasktriggertype property value. 
     * @returns a integer
     */
    public get msdyusd_scripttasktriggertype() {
        return this._msdyusd_scripttasktriggertype;
    };
    /**
     * Sets the msdyusd_scripttasktriggertype property value. 
     * @param value Value to set for the msdyusd_scripttasktriggertype property.
     */
    public set msdyusd_scripttasktriggertype(value: number | undefined) {
        this._msdyusd_scripttasktriggertype = value;
    };
    /**
     * Gets the msdyusd_TriggerId property value. 
     * @returns a msdyusd_task
     */
    public get msdyusd_TriggerId() {
        return this._msdyusd_TriggerId;
    };
    /**
     * Sets the msdyusd_TriggerId property value. 
     * @param value Value to set for the msdyusd_TriggerId property.
     */
    public set msdyusd_TriggerId(value: Msdyusd_task | undefined) {
        this._msdyusd_TriggerId = value;
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
        writer.writeStringValue("_msdyusd_triggerid_value", this._msdyusd_triggerid_value);
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
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
        writer.writeCollectionOfObjectValues<Annotation>("msdyusd_scripttasktrigger_Annotations", this.msdyusd_scripttasktrigger_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_scripttasktrigger_AsyncOperations", this.msdyusd_scripttasktrigger_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_scripttasktrigger_BulkDeleteFailures", this.msdyusd_scripttasktrigger_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_scripttasktrigger_MailboxTrackingFolders", this.msdyusd_scripttasktrigger_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses", this.msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_scripttasktrigger_ProcessSession", this.msdyusd_scripttasktrigger_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_scripttasktrigger_SyncErrors", this.msdyusd_scripttasktrigger_SyncErrors);
        writer.writeStringValue("msdyusd_scripttasktriggerdata", this.msdyusd_scripttasktriggerdata);
        writer.writeStringValue("msdyusd_scripttasktriggerid", this.msdyusd_scripttasktriggerid);
        writer.writeNumberValue("msdyusd_scripttasktriggertype", this.msdyusd_scripttasktriggertype);
        writer.writeObjectValue<Msdyusd_task>("msdyusd_TriggerId", this.msdyusd_TriggerId);
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
