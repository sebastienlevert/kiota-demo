import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_consoleapplicationnotificationfieldFromDiscriminatorValue} from './createMsdyn_consoleapplicationnotificationfieldFromDiscriminatorValue';
import {createMsdyn_scenarioFromDiscriminatorValue} from './createMsdyn_scenarioFromDiscriminatorValue';
import {createMsdyn_templatetagsFromDiscriminatorValue} from './createMsdyn_templatetagsFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_consoleapplicationnotificationfield, Msdyn_scenario, Msdyn_templatetags, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_consoleapplicationnotificationtemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_acceptbuttontext?: string | undefined;
    private _msdyn_actionbuttons?: string | undefined;
    private _msdyn_autoacceptnotification?: boolean | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_consoleapplicationnotificationtemplateid?: string | undefined;
    private _msdyn_icon?: string | undefined;
    private _msdyn_msdyn_consoleapplicationnotificationtag?: Msdyn_templatetags[] | undefined;
    private _msdyn_msdyn_consoleapplicationnotificationtempl?: Msdyn_consoleapplicationnotificationfield[] | undefined;
    private _msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate?: Msdyn_scenario[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_notificationbuttons?: string | undefined;
    private _msdyn_notificationfieldsplaceholder?: string | undefined;
    private _msdyn_rejectbuttonautoaccept?: boolean | undefined;
    private _msdyn_rejectbuttontext?: string | undefined;
    private _msdyn_renderingorder?: number | undefined;
    private _msdyn_showtimeout?: number | undefined;
    private _msdyn_theme?: number | undefined;
    private _msdyn_timeout?: number | undefined;
    private _msdyn_title?: string | undefined;
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
     * Instantiates a new msdyn_consoleapplicationnotificationtemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_acceptbuttontext": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_acceptbuttontext = n.getStringValue(); },
            "msdyn_actionbuttons": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_actionbuttons = n.getStringValue(); },
            "msdyn_autoacceptnotification": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_autoacceptnotification = n.getBooleanValue(); },
            "msdyn_consoleapplicationnotificationtemplate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_ProcessSession": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplate_SyncErrors": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_consoleapplicationnotificationtemplateid": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_consoleapplicationnotificationtemplateid = n.getStringValue(); },
            "msdyn_icon": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_icon = n.getStringValue(); },
            "msdyn_msdyn_consoleapplicationnotificationtag": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_msdyn_consoleapplicationnotificationtag = n.getCollectionOfObjectValues<Msdyn_templatetags>(createMsdyn_templatetagsFromDiscriminatorValue); },
            "msdyn_msdyn_consoleapplicationnotificationtempl": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_msdyn_consoleapplicationnotificationtempl = n.getCollectionOfObjectValues<Msdyn_consoleapplicationnotificationfield>(createMsdyn_consoleapplicationnotificationfieldFromDiscriminatorValue); },
            "msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate = n.getCollectionOfObjectValues<Msdyn_scenario>(createMsdyn_scenarioFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_name = n.getStringValue(); },
            "msdyn_notificationbuttons": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_notificationbuttons = n.getStringValue(); },
            "msdyn_notificationfieldsplaceholder": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_notificationfieldsplaceholder = n.getStringValue(); },
            "msdyn_rejectbuttonautoaccept": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_rejectbuttonautoaccept = n.getBooleanValue(); },
            "msdyn_rejectbuttontext": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_rejectbuttontext = n.getStringValue(); },
            "msdyn_renderingorder": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_renderingorder = n.getNumberValue(); },
            "msdyn_showtimeout": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_showtimeout = n.getNumberValue(); },
            "msdyn_theme": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_theme = n.getNumberValue(); },
            "msdyn_timeout": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_timeout = n.getNumberValue(); },
            "msdyn_title": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).msdyn_title = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_consoleapplicationnotificationtemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actionbuttons property value. 
     * @returns a string
     */
    public get msdyn_actionbuttons() {
        return this._msdyn_actionbuttons;
    };
    /**
     * Sets the msdyn_actionbuttons property value. 
     * @param value Value to set for the msdyn_actionbuttons property.
     */
    public set msdyn_actionbuttons(value: string | undefined) {
        this._msdyn_actionbuttons = value;
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
     * Gets the msdyn_consoleapplicationnotificationtemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_consoleapplicationnotificationtemplate_AsyncOperations() {
        return this._msdyn_consoleapplicationnotificationtemplate_AsyncOperations;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_AsyncOperations property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures() {
        return this._msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord() {
        return this._msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord() {
        return this._msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders() {
        return this._msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_consoleapplicationnotificationtemplate_ProcessSession() {
        return this._msdyn_consoleapplicationnotificationtemplate_ProcessSession;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_ProcessSession property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_ProcessSession property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_consoleapplicationnotificationtemplate_SyncErrors() {
        return this._msdyn_consoleapplicationnotificationtemplate_SyncErrors;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplate_SyncErrors property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplate_SyncErrors property.
     */
    public set msdyn_consoleapplicationnotificationtemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_consoleapplicationnotificationtemplate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_consoleapplicationnotificationtemplateid property value. 
     * @returns a string
     */
    public get msdyn_consoleapplicationnotificationtemplateid() {
        return this._msdyn_consoleapplicationnotificationtemplateid;
    };
    /**
     * Sets the msdyn_consoleapplicationnotificationtemplateid property value. 
     * @param value Value to set for the msdyn_consoleapplicationnotificationtemplateid property.
     */
    public set msdyn_consoleapplicationnotificationtemplateid(value: string | undefined) {
        this._msdyn_consoleapplicationnotificationtemplateid = value;
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
     * Gets the msdyn_msdyn_consoleapplicationnotificationtag property value. 
     * @returns a msdyn_templatetags
     */
    public get msdyn_msdyn_consoleapplicationnotificationtag() {
        return this._msdyn_msdyn_consoleapplicationnotificationtag;
    };
    /**
     * Sets the msdyn_msdyn_consoleapplicationnotificationtag property value. 
     * @param value Value to set for the msdyn_msdyn_consoleapplicationnotificationtag property.
     */
    public set msdyn_msdyn_consoleapplicationnotificationtag(value: Msdyn_templatetags[] | undefined) {
        this._msdyn_msdyn_consoleapplicationnotificationtag = value;
    };
    /**
     * Gets the msdyn_msdyn_consoleapplicationnotificationtempl property value. 
     * @returns a msdyn_consoleapplicationnotificationfield
     */
    public get msdyn_msdyn_consoleapplicationnotificationtempl() {
        return this._msdyn_msdyn_consoleapplicationnotificationtempl;
    };
    /**
     * Sets the msdyn_msdyn_consoleapplicationnotificationtempl property value. 
     * @param value Value to set for the msdyn_msdyn_consoleapplicationnotificationtempl property.
     */
    public set msdyn_msdyn_consoleapplicationnotificationtempl(value: Msdyn_consoleapplicationnotificationfield[] | undefined) {
        this._msdyn_msdyn_consoleapplicationnotificationtempl = value;
    };
    /**
     * Gets the msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate property value. 
     * @returns a msdyn_scenario
     */
    public get msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate() {
        return this._msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate;
    };
    /**
     * Sets the msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate property value. 
     * @param value Value to set for the msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate property.
     */
    public set msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate(value: Msdyn_scenario[] | undefined) {
        this._msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate = value;
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
     * Gets the msdyn_notificationbuttons property value. 
     * @returns a string
     */
    public get msdyn_notificationbuttons() {
        return this._msdyn_notificationbuttons;
    };
    /**
     * Sets the msdyn_notificationbuttons property value. 
     * @param value Value to set for the msdyn_notificationbuttons property.
     */
    public set msdyn_notificationbuttons(value: string | undefined) {
        this._msdyn_notificationbuttons = value;
    };
    /**
     * Gets the msdyn_notificationfieldsplaceholder property value. 
     * @returns a string
     */
    public get msdyn_notificationfieldsplaceholder() {
        return this._msdyn_notificationfieldsplaceholder;
    };
    /**
     * Sets the msdyn_notificationfieldsplaceholder property value. 
     * @param value Value to set for the msdyn_notificationfieldsplaceholder property.
     */
    public set msdyn_notificationfieldsplaceholder(value: string | undefined) {
        this._msdyn_notificationfieldsplaceholder = value;
    };
    /**
     * Gets the msdyn_rejectbuttonautoaccept property value. 
     * @returns a boolean
     */
    public get msdyn_rejectbuttonautoaccept() {
        return this._msdyn_rejectbuttonautoaccept;
    };
    /**
     * Sets the msdyn_rejectbuttonautoaccept property value. 
     * @param value Value to set for the msdyn_rejectbuttonautoaccept property.
     */
    public set msdyn_rejectbuttonautoaccept(value: boolean | undefined) {
        this._msdyn_rejectbuttonautoaccept = value;
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
     * Gets the msdyn_renderingorder property value. 
     * @returns a integer
     */
    public get msdyn_renderingorder() {
        return this._msdyn_renderingorder;
    };
    /**
     * Sets the msdyn_renderingorder property value. 
     * @param value Value to set for the msdyn_renderingorder property.
     */
    public set msdyn_renderingorder(value: number | undefined) {
        this._msdyn_renderingorder = value;
    };
    /**
     * Gets the msdyn_showtimeout property value. 
     * @returns a integer
     */
    public get msdyn_showtimeout() {
        return this._msdyn_showtimeout;
    };
    /**
     * Sets the msdyn_showtimeout property value. 
     * @param value Value to set for the msdyn_showtimeout property.
     */
    public set msdyn_showtimeout(value: number | undefined) {
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
        writer.writeStringValue("msdyn_acceptbuttontext", this.msdyn_acceptbuttontext);
        writer.writeStringValue("msdyn_actionbuttons", this.msdyn_actionbuttons);
        writer.writeBooleanValue("msdyn_autoacceptnotification", this.msdyn_autoacceptnotification);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_consoleapplicationnotificationtemplate_AsyncOperations", this.msdyn_consoleapplicationnotificationtemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures", this.msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord", this.msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord", this.msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders", this.msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses", this.msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_consoleapplicationnotificationtemplate_ProcessSession", this.msdyn_consoleapplicationnotificationtemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_consoleapplicationnotificationtemplate_SyncErrors", this.msdyn_consoleapplicationnotificationtemplate_SyncErrors);
        writer.writeStringValue("msdyn_consoleapplicationnotificationtemplateid", this.msdyn_consoleapplicationnotificationtemplateid);
        writer.writeStringValue("msdyn_icon", this.msdyn_icon);
        writer.writeCollectionOfObjectValues<Msdyn_templatetags>("msdyn_msdyn_consoleapplicationnotificationtag", this.msdyn_msdyn_consoleapplicationnotificationtag);
        writer.writeCollectionOfObjectValues<Msdyn_consoleapplicationnotificationfield>("msdyn_msdyn_consoleapplicationnotificationtempl", this.msdyn_msdyn_consoleapplicationnotificationtempl);
        writer.writeCollectionOfObjectValues<Msdyn_scenario>("msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate", this.msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_notificationbuttons", this.msdyn_notificationbuttons);
        writer.writeStringValue("msdyn_notificationfieldsplaceholder", this.msdyn_notificationfieldsplaceholder);
        writer.writeBooleanValue("msdyn_rejectbuttonautoaccept", this.msdyn_rejectbuttonautoaccept);
        writer.writeStringValue("msdyn_rejectbuttontext", this.msdyn_rejectbuttontext);
        writer.writeNumberValue("msdyn_renderingorder", this.msdyn_renderingorder);
        writer.writeNumberValue("msdyn_showtimeout", this.msdyn_showtimeout);
        writer.writeNumberValue("msdyn_theme", this.msdyn_theme);
        writer.writeNumberValue("msdyn_timeout", this.msdyn_timeout);
        writer.writeStringValue("msdyn_title", this.msdyn_title);
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
