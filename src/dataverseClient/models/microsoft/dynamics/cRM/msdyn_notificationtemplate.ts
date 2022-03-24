import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_notificationfieldFromDiscriminatorValue} from './createMsdyn_notificationfieldFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_notificationfield, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_notificationtemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_acceptbuttontext?: string | undefined;
    private _msdyn_autoacceptnotification?: boolean | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_desktopnotificationmode?: number | undefined;
    private _msdyn_icon?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_notificationtemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_notificationtemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_notificationtemplate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_notificationtemplate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_notificationtemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_notificationtemplate_notificationfield?: Msdyn_notificationfield[] | undefined;
    private _msdyn_notificationtemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_notificationtemplate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_notificationtemplate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_notificationtemplateid?: string | undefined;
    private _msdyn_rejectbuttontext?: string | undefined;
    private _msdyn_showrejectbutton?: boolean | undefined;
    private _msdyn_showtimeout?: boolean | undefined;
    private _msdyn_theme?: number | undefined;
    private _msdyn_timeout?: number | undefined;
    private _msdyn_title?: string | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new msdyn_notificationtemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_notificationtemplate)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_notificationtemplate).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_notificationtemplate).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_notificationtemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_notificationtemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_notificationtemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_notificationtemplate).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_notificationtemplate).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_notificationtemplate).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_notificationtemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_notificationtemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_notificationtemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_acceptbuttontext": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_acceptbuttontext = n.getStringValue(); },
            "msdyn_autoacceptnotification": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_autoacceptnotification = n.getBooleanValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_description = n.getStringValue(); },
            "msdyn_desktopnotificationmode": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_desktopnotificationmode = n.getNumberValue(); },
            "msdyn_icon": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_icon = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_name = n.getStringValue(); },
            "msdyn_notificationtemplate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_notificationtemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_notificationtemplate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_notificationtemplate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_notificationtemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_notificationtemplate_notificationfield": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_notificationfield = n.getCollectionOfObjectValues<Msdyn_notificationfield>(createMsdyn_notificationfieldFromDiscriminatorValue); },
            "msdyn_notificationtemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_notificationtemplate_ProcessSession": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_notificationtemplate_SyncErrors": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_notificationtemplateid": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_notificationtemplateid = n.getStringValue(); },
            "msdyn_rejectbuttontext": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_rejectbuttontext = n.getStringValue(); },
            "msdyn_showrejectbutton": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_showrejectbutton = n.getBooleanValue(); },
            "msdyn_showtimeout": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_showtimeout = n.getBooleanValue(); },
            "msdyn_theme": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_theme = n.getNumberValue(); },
            "msdyn_timeout": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_timeout = n.getNumberValue(); },
            "msdyn_title": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_title = n.getStringValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_notificationtemplate).msdyn_uniquename = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_notificationtemplate).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_notificationtemplate).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_notificationtemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_notificationtemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_notificationtemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_notificationtemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_notificationtemplate).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_notificationtemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_notificationtemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_notificationtemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_notificationtemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_notificationtemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the msdyn_acceptbuttontext property value. 
     * @returns a string
     */
    public get msdyn_acceptbuttontext() {
        return this._msdyn_acceptbuttontext;
    };
    /**
     * Sets the msdyn_acceptbuttontext property value. 
     * @param value Value to set for the msdyn_acceptbuttontext property.
     */
    public set msdyn_acceptbuttontext(value: string | undefined) {
        this._msdyn_acceptbuttontext = value;
    };
    /**
     * Gets the msdyn_autoacceptnotification property value. 
     * @returns a boolean
     */
    public get msdyn_autoacceptnotification() {
        return this._msdyn_autoacceptnotification;
    };
    /**
     * Sets the msdyn_autoacceptnotification property value. 
     * @param value Value to set for the msdyn_autoacceptnotification property.
     */
    public set msdyn_autoacceptnotification(value: boolean | undefined) {
        this._msdyn_autoacceptnotification = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_desktopnotificationmode property value. 
     * @returns a integer
     */
    public get msdyn_desktopnotificationmode() {
        return this._msdyn_desktopnotificationmode;
    };
    /**
     * Sets the msdyn_desktopnotificationmode property value. 
     * @param value Value to set for the msdyn_desktopnotificationmode property.
     */
    public set msdyn_desktopnotificationmode(value: number | undefined) {
        this._msdyn_desktopnotificationmode = value;
    };
    /**
     * Gets the msdyn_icon property value. 
     * @returns a string
     */
    public get msdyn_icon() {
        return this._msdyn_icon;
    };
    /**
     * Sets the msdyn_icon property value. 
     * @param value Value to set for the msdyn_icon property.
     */
    public set msdyn_icon(value: string | undefined) {
        this._msdyn_icon = value;
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
     * Gets the msdyn_notificationtemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_notificationtemplate_AsyncOperations() {
        return this._msdyn_notificationtemplate_AsyncOperations;
    };
    /**
     * Sets the msdyn_notificationtemplate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_notificationtemplate_AsyncOperations property.
     */
    public set msdyn_notificationtemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_notificationtemplate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_notificationtemplate_BulkDeleteFailures() {
        return this._msdyn_notificationtemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_notificationtemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_notificationtemplate_BulkDeleteFailures property.
     */
    public set msdyn_notificationtemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_notificationtemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_notificationtemplate_DuplicateBaseRecord() {
        return this._msdyn_notificationtemplate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_notificationtemplate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_notificationtemplate_DuplicateBaseRecord property.
     */
    public set msdyn_notificationtemplate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_notificationtemplate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_notificationtemplate_DuplicateMatchingRecord() {
        return this._msdyn_notificationtemplate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_notificationtemplate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_notificationtemplate_DuplicateMatchingRecord property.
     */
    public set msdyn_notificationtemplate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_notificationtemplate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_notificationtemplate_MailboxTrackingFolders() {
        return this._msdyn_notificationtemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_notificationtemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_notificationtemplate_MailboxTrackingFolders property.
     */
    public set msdyn_notificationtemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_notificationtemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_notificationfield property value. 
     * @returns a msdyn_notificationfield
     */
    public get msdyn_notificationtemplate_notificationfield() {
        return this._msdyn_notificationtemplate_notificationfield;
    };
    /**
     * Sets the msdyn_notificationtemplate_notificationfield property value. 
     * @param value Value to set for the msdyn_notificationtemplate_notificationfield property.
     */
    public set msdyn_notificationtemplate_notificationfield(value: Msdyn_notificationfield[] | undefined) {
        this._msdyn_notificationtemplate_notificationfield = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_notificationtemplate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_notificationtemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_notificationtemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_notificationtemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_notificationtemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_notificationtemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_notificationtemplate_ProcessSession() {
        return this._msdyn_notificationtemplate_ProcessSession;
    };
    /**
     * Sets the msdyn_notificationtemplate_ProcessSession property value. 
     * @param value Value to set for the msdyn_notificationtemplate_ProcessSession property.
     */
    public set msdyn_notificationtemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_notificationtemplate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_notificationtemplate_SyncErrors() {
        return this._msdyn_notificationtemplate_SyncErrors;
    };
    /**
     * Sets the msdyn_notificationtemplate_SyncErrors property value. 
     * @param value Value to set for the msdyn_notificationtemplate_SyncErrors property.
     */
    public set msdyn_notificationtemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_notificationtemplate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_notificationtemplateid property value. 
     * @returns a string
     */
    public get msdyn_notificationtemplateid() {
        return this._msdyn_notificationtemplateid;
    };
    /**
     * Sets the msdyn_notificationtemplateid property value. 
     * @param value Value to set for the msdyn_notificationtemplateid property.
     */
    public set msdyn_notificationtemplateid(value: string | undefined) {
        this._msdyn_notificationtemplateid = value;
    };
    /**
     * Gets the msdyn_rejectbuttontext property value. 
     * @returns a string
     */
    public get msdyn_rejectbuttontext() {
        return this._msdyn_rejectbuttontext;
    };
    /**
     * Sets the msdyn_rejectbuttontext property value. 
     * @param value Value to set for the msdyn_rejectbuttontext property.
     */
    public set msdyn_rejectbuttontext(value: string | undefined) {
        this._msdyn_rejectbuttontext = value;
    };
    /**
     * Gets the msdyn_showrejectbutton property value. 
     * @returns a boolean
     */
    public get msdyn_showrejectbutton() {
        return this._msdyn_showrejectbutton;
    };
    /**
     * Sets the msdyn_showrejectbutton property value. 
     * @param value Value to set for the msdyn_showrejectbutton property.
     */
    public set msdyn_showrejectbutton(value: boolean | undefined) {
        this._msdyn_showrejectbutton = value;
    };
    /**
     * Gets the msdyn_showtimeout property value. 
     * @returns a boolean
     */
    public get msdyn_showtimeout() {
        return this._msdyn_showtimeout;
    };
    /**
     * Sets the msdyn_showtimeout property value. 
     * @param value Value to set for the msdyn_showtimeout property.
     */
    public set msdyn_showtimeout(value: boolean | undefined) {
        this._msdyn_showtimeout = value;
    };
    /**
     * Gets the msdyn_theme property value. 
     * @returns a integer
     */
    public get msdyn_theme() {
        return this._msdyn_theme;
    };
    /**
     * Sets the msdyn_theme property value. 
     * @param value Value to set for the msdyn_theme property.
     */
    public set msdyn_theme(value: number | undefined) {
        this._msdyn_theme = value;
    };
    /**
     * Gets the msdyn_timeout property value. 
     * @returns a integer
     */
    public get msdyn_timeout() {
        return this._msdyn_timeout;
    };
    /**
     * Sets the msdyn_timeout property value. 
     * @param value Value to set for the msdyn_timeout property.
     */
    public set msdyn_timeout(value: number | undefined) {
        this._msdyn_timeout = value;
    };
    /**
     * Gets the msdyn_title property value. 
     * @returns a string
     */
    public get msdyn_title() {
        return this._msdyn_title;
    };
    /**
     * Sets the msdyn_title property value. 
     * @param value Value to set for the msdyn_title property.
     */
    public set msdyn_title(value: string | undefined) {
        this._msdyn_title = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_acceptbuttontext", this.msdyn_acceptbuttontext);
        writer.writeBooleanValue("msdyn_autoacceptnotification", this.msdyn_autoacceptnotification);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_desktopnotificationmode", this.msdyn_desktopnotificationmode);
        writer.writeStringValue("msdyn_icon", this.msdyn_icon);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_notificationtemplate_AsyncOperations", this.msdyn_notificationtemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_notificationtemplate_BulkDeleteFailures", this.msdyn_notificationtemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_notificationtemplate_DuplicateBaseRecord", this.msdyn_notificationtemplate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_notificationtemplate_DuplicateMatchingRecord", this.msdyn_notificationtemplate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_notificationtemplate_MailboxTrackingFolders", this.msdyn_notificationtemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_notificationfield>("msdyn_notificationtemplate_notificationfield", this.msdyn_notificationtemplate_notificationfield);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_notificationtemplate_PrincipalObjectAttributeAccesses", this.msdyn_notificationtemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_notificationtemplate_ProcessSession", this.msdyn_notificationtemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_notificationtemplate_SyncErrors", this.msdyn_notificationtemplate_SyncErrors);
        writer.writeStringValue("msdyn_notificationtemplateid", this.msdyn_notificationtemplateid);
        writer.writeStringValue("msdyn_rejectbuttontext", this.msdyn_rejectbuttontext);
        writer.writeBooleanValue("msdyn_showrejectbutton", this.msdyn_showrejectbutton);
        writer.writeBooleanValue("msdyn_showtimeout", this.msdyn_showtimeout);
        writer.writeNumberValue("msdyn_theme", this.msdyn_theme);
        writer.writeNumberValue("msdyn_timeout", this.msdyn_timeout);
        writer.writeStringValue("msdyn_title", this.msdyn_title);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
