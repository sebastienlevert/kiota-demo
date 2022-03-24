import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_ocsessionparticipanteventFromDiscriminatorValue} from './createMsdyn_ocsessionparticipanteventFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Msdyn_ocsession, Msdyn_ocsessionparticipantevent, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sessionparticipant extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agentid_value?: string | undefined;
    private __msdyn_omnichannelsession_value?: string | undefined;
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
    private _msdyn_activedirectoryuserid?: string | undefined;
    private _msdyn_activetime?: number | undefined;
    private _msdyn_addedon?: Date | undefined;
    private _msdyn_agentid?: Systemuser | undefined;
    private _msdyn_externalparticipantchannel?: string | undefined;
    private _msdyn_externalparticipantchanneltype?: number | undefined;
    private _msdyn_idletime?: number | undefined;
    private _msdyn_inactivetime?: number | undefined;
    private _msdyn_joinedon?: Date | undefined;
    private _msdyn_lefton?: Date | undefined;
    private _msdyn_mode?: number | undefined;
    private _msdyn_modifiedon?: Date | undefined;
    private _msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid?: Msdyn_ocsessionparticipantevent[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_omnichannelsession?: Msdyn_ocsession | undefined;
    private _msdyn_sessionparticipant_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sessionparticipant_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sessionparticipant_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessionparticipant_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessionparticipant_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sessionparticipant_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sessionparticipant_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sessionparticipant_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sessionparticipantid?: string | undefined;
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
     * Gets the _msdyn_agentid_value property value. 
     * @returns a string
     */
    public get _msdyn_agentid_value() {
        return this.__msdyn_agentid_value;
    };
    /**
     * Sets the _msdyn_agentid_value property value. 
     * @param value Value to set for the _msdyn_agentid_value property.
     */
    public set _msdyn_agentid_value(value: string | undefined) {
        this.__msdyn_agentid_value = value;
    };
    /**
     * Gets the _msdyn_omnichannelsession_value property value. 
     * @returns a string
     */
    public get _msdyn_omnichannelsession_value() {
        return this.__msdyn_omnichannelsession_value;
    };
    /**
     * Sets the _msdyn_omnichannelsession_value property value. 
     * @param value Value to set for the _msdyn_omnichannelsession_value property.
     */
    public set _msdyn_omnichannelsession_value(value: string | undefined) {
        this.__msdyn_omnichannelsession_value = value;
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
     * Instantiates a new msdyn_sessionparticipant and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agentid_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._msdyn_agentid_value = n.getStringValue(); },
            "_msdyn_omnichannelsession_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._msdyn_omnichannelsession_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sessionparticipant)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sessionparticipant).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sessionparticipant).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sessionparticipant).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sessionparticipant).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sessionparticipant).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sessionparticipant).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sessionparticipant).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_activedirectoryuserid": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_activedirectoryuserid = n.getStringValue(); },
            "msdyn_activetime": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_activetime = n.getNumberValue(); },
            "msdyn_addedon": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_addedon = n.getDateValue(); },
            "msdyn_agentid": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_agentid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_externalparticipantchannel": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_externalparticipantchannel = n.getStringValue(); },
            "msdyn_externalparticipantchanneltype": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_externalparticipantchanneltype = n.getNumberValue(); },
            "msdyn_idletime": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_idletime = n.getNumberValue(); },
            "msdyn_inactivetime": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_inactivetime = n.getNumberValue(); },
            "msdyn_joinedon": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_joinedon = n.getDateValue(); },
            "msdyn_lefton": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_lefton = n.getDateValue(); },
            "msdyn_mode": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_mode = n.getNumberValue(); },
            "msdyn_modifiedon": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_modifiedon = n.getDateValue(); },
            "msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid = n.getCollectionOfObjectValues<Msdyn_ocsessionparticipantevent>(createMsdyn_ocsessionparticipanteventFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_name = n.getStringValue(); },
            "msdyn_omnichannelsession": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_omnichannelsession = n.getObjectValue<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_sessionparticipant_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sessionparticipant_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sessionparticipant_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessionparticipant_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessionparticipant_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sessionparticipant_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sessionparticipant_ProcessSession": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sessionparticipant_SyncErrors": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipant_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sessionparticipantid": (o, n) => { (o as unknown as Msdyn_sessionparticipant).msdyn_sessionparticipantid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sessionparticipant).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sessionparticipant).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sessionparticipant).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sessionparticipant).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sessionparticipant).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sessionparticipant).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sessionparticipant).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sessionparticipant).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sessionparticipant).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sessionparticipant).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_activedirectoryuserid property value. 
     * @returns a string
     */
    public get msdyn_activedirectoryuserid() {
        return this._msdyn_activedirectoryuserid;
    };
    /**
     * Sets the msdyn_activedirectoryuserid property value. 
     * @param value Value to set for the msdyn_activedirectoryuserid property.
     */
    public set msdyn_activedirectoryuserid(value: string | undefined) {
        this._msdyn_activedirectoryuserid = value;
    };
    /**
     * Gets the msdyn_activetime property value. 
     * @returns a integer
     */
    public get msdyn_activetime() {
        return this._msdyn_activetime;
    };
    /**
     * Sets the msdyn_activetime property value. 
     * @param value Value to set for the msdyn_activetime property.
     */
    public set msdyn_activetime(value: number | undefined) {
        this._msdyn_activetime = value;
    };
    /**
     * Gets the msdyn_addedon property value. 
     * @returns a Date
     */
    public get msdyn_addedon() {
        return this._msdyn_addedon;
    };
    /**
     * Sets the msdyn_addedon property value. 
     * @param value Value to set for the msdyn_addedon property.
     */
    public set msdyn_addedon(value: Date | undefined) {
        this._msdyn_addedon = value;
    };
    /**
     * Gets the msdyn_agentid property value. 
     * @returns a systemuser
     */
    public get msdyn_agentid() {
        return this._msdyn_agentid;
    };
    /**
     * Sets the msdyn_agentid property value. 
     * @param value Value to set for the msdyn_agentid property.
     */
    public set msdyn_agentid(value: Systemuser | undefined) {
        this._msdyn_agentid = value;
    };
    /**
     * Gets the msdyn_externalparticipantchannel property value. 
     * @returns a string
     */
    public get msdyn_externalparticipantchannel() {
        return this._msdyn_externalparticipantchannel;
    };
    /**
     * Sets the msdyn_externalparticipantchannel property value. 
     * @param value Value to set for the msdyn_externalparticipantchannel property.
     */
    public set msdyn_externalparticipantchannel(value: string | undefined) {
        this._msdyn_externalparticipantchannel = value;
    };
    /**
     * Gets the msdyn_externalparticipantchanneltype property value. 
     * @returns a integer
     */
    public get msdyn_externalparticipantchanneltype() {
        return this._msdyn_externalparticipantchanneltype;
    };
    /**
     * Sets the msdyn_externalparticipantchanneltype property value. 
     * @param value Value to set for the msdyn_externalparticipantchanneltype property.
     */
    public set msdyn_externalparticipantchanneltype(value: number | undefined) {
        this._msdyn_externalparticipantchanneltype = value;
    };
    /**
     * Gets the msdyn_idletime property value. 
     * @returns a integer
     */
    public get msdyn_idletime() {
        return this._msdyn_idletime;
    };
    /**
     * Sets the msdyn_idletime property value. 
     * @param value Value to set for the msdyn_idletime property.
     */
    public set msdyn_idletime(value: number | undefined) {
        this._msdyn_idletime = value;
    };
    /**
     * Gets the msdyn_inactivetime property value. 
     * @returns a integer
     */
    public get msdyn_inactivetime() {
        return this._msdyn_inactivetime;
    };
    /**
     * Sets the msdyn_inactivetime property value. 
     * @param value Value to set for the msdyn_inactivetime property.
     */
    public set msdyn_inactivetime(value: number | undefined) {
        this._msdyn_inactivetime = value;
    };
    /**
     * Gets the msdyn_joinedon property value. 
     * @returns a Date
     */
    public get msdyn_joinedon() {
        return this._msdyn_joinedon;
    };
    /**
     * Sets the msdyn_joinedon property value. 
     * @param value Value to set for the msdyn_joinedon property.
     */
    public set msdyn_joinedon(value: Date | undefined) {
        this._msdyn_joinedon = value;
    };
    /**
     * Gets the msdyn_lefton property value. 
     * @returns a Date
     */
    public get msdyn_lefton() {
        return this._msdyn_lefton;
    };
    /**
     * Sets the msdyn_lefton property value. 
     * @param value Value to set for the msdyn_lefton property.
     */
    public set msdyn_lefton(value: Date | undefined) {
        this._msdyn_lefton = value;
    };
    /**
     * Gets the msdyn_mode property value. 
     * @returns a integer
     */
    public get msdyn_mode() {
        return this._msdyn_mode;
    };
    /**
     * Sets the msdyn_mode property value. 
     * @param value Value to set for the msdyn_mode property.
     */
    public set msdyn_mode(value: number | undefined) {
        this._msdyn_mode = value;
    };
    /**
     * Gets the msdyn_modifiedon property value. 
     * @returns a Date
     */
    public get msdyn_modifiedon() {
        return this._msdyn_modifiedon;
    };
    /**
     * Sets the msdyn_modifiedon property value. 
     * @param value Value to set for the msdyn_modifiedon property.
     */
    public set msdyn_modifiedon(value: Date | undefined) {
        this._msdyn_modifiedon = value;
    };
    /**
     * Gets the msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid() {
        return this._msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid;
    };
    /**
     * Sets the msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid property value. 
     * @param value Value to set for the msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid property.
     */
    public set msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid = value;
    };
    /**
     * Gets the msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid property value. 
     * @returns a msdyn_ocsessionparticipantevent
     */
    public get msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid() {
        return this._msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid;
    };
    /**
     * Sets the msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid property value. 
     * @param value Value to set for the msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid property.
     */
    public set msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid(value: Msdyn_ocsessionparticipantevent[] | undefined) {
        this._msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid = value;
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
     * Gets the msdyn_omnichannelsession property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_omnichannelsession() {
        return this._msdyn_omnichannelsession;
    };
    /**
     * Sets the msdyn_omnichannelsession property value. 
     * @param value Value to set for the msdyn_omnichannelsession property.
     */
    public set msdyn_omnichannelsession(value: Msdyn_ocsession | undefined) {
        this._msdyn_omnichannelsession = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sessionparticipant_AsyncOperations() {
        return this._msdyn_sessionparticipant_AsyncOperations;
    };
    /**
     * Sets the msdyn_sessionparticipant_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sessionparticipant_AsyncOperations property.
     */
    public set msdyn_sessionparticipant_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sessionparticipant_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sessionparticipant_BulkDeleteFailures() {
        return this._msdyn_sessionparticipant_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sessionparticipant_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sessionparticipant_BulkDeleteFailures property.
     */
    public set msdyn_sessionparticipant_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sessionparticipant_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessionparticipant_DuplicateBaseRecord() {
        return this._msdyn_sessionparticipant_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sessionparticipant_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sessionparticipant_DuplicateBaseRecord property.
     */
    public set msdyn_sessionparticipant_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessionparticipant_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessionparticipant_DuplicateMatchingRecord() {
        return this._msdyn_sessionparticipant_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sessionparticipant_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sessionparticipant_DuplicateMatchingRecord property.
     */
    public set msdyn_sessionparticipant_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessionparticipant_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sessionparticipant_MailboxTrackingFolders() {
        return this._msdyn_sessionparticipant_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sessionparticipant_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sessionparticipant_MailboxTrackingFolders property.
     */
    public set msdyn_sessionparticipant_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sessionparticipant_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sessionparticipant_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sessionparticipant_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sessionparticipant_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sessionparticipant_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sessionparticipant_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sessionparticipant_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sessionparticipant_ProcessSession() {
        return this._msdyn_sessionparticipant_ProcessSession;
    };
    /**
     * Sets the msdyn_sessionparticipant_ProcessSession property value. 
     * @param value Value to set for the msdyn_sessionparticipant_ProcessSession property.
     */
    public set msdyn_sessionparticipant_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sessionparticipant_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sessionparticipant_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sessionparticipant_SyncErrors() {
        return this._msdyn_sessionparticipant_SyncErrors;
    };
    /**
     * Sets the msdyn_sessionparticipant_SyncErrors property value. 
     * @param value Value to set for the msdyn_sessionparticipant_SyncErrors property.
     */
    public set msdyn_sessionparticipant_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sessionparticipant_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sessionparticipantid property value. 
     * @returns a string
     */
    public get msdyn_sessionparticipantid() {
        return this._msdyn_sessionparticipantid;
    };
    /**
     * Sets the msdyn_sessionparticipantid property value. 
     * @param value Value to set for the msdyn_sessionparticipantid property.
     */
    public set msdyn_sessionparticipantid(value: string | undefined) {
        this._msdyn_sessionparticipantid = value;
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
        writer.writeStringValue("_msdyn_agentid_value", this._msdyn_agentid_value);
        writer.writeStringValue("_msdyn_omnichannelsession_value", this._msdyn_omnichannelsession_value);
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
        writer.writeStringValue("msdyn_activedirectoryuserid", this.msdyn_activedirectoryuserid);
        writer.writeNumberValue("msdyn_activetime", this.msdyn_activetime);
        writer.writeDateValue("msdyn_addedon", this.msdyn_addedon);
        writer.writeObjectValue<Systemuser>("msdyn_agentid", this.msdyn_agentid);
        writer.writeStringValue("msdyn_externalparticipantchannel", this.msdyn_externalparticipantchannel);
        writer.writeNumberValue("msdyn_externalparticipantchanneltype", this.msdyn_externalparticipantchanneltype);
        writer.writeNumberValue("msdyn_idletime", this.msdyn_idletime);
        writer.writeNumberValue("msdyn_inactivetime", this.msdyn_inactivetime);
        writer.writeDateValue("msdyn_joinedon", this.msdyn_joinedon);
        writer.writeDateValue("msdyn_lefton", this.msdyn_lefton);
        writer.writeNumberValue("msdyn_mode", this.msdyn_mode);
        writer.writeDateValue("msdyn_modifiedon", this.msdyn_modifiedon);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid", this.msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsessionparticipantevent>("msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid", this.msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_ocsession>("msdyn_omnichannelsession", this.msdyn_omnichannelsession);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sessionparticipant_AsyncOperations", this.msdyn_sessionparticipant_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sessionparticipant_BulkDeleteFailures", this.msdyn_sessionparticipant_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessionparticipant_DuplicateBaseRecord", this.msdyn_sessionparticipant_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessionparticipant_DuplicateMatchingRecord", this.msdyn_sessionparticipant_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sessionparticipant_MailboxTrackingFolders", this.msdyn_sessionparticipant_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sessionparticipant_PrincipalObjectAttributeAccesses", this.msdyn_sessionparticipant_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sessionparticipant_ProcessSession", this.msdyn_sessionparticipant_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sessionparticipant_SyncErrors", this.msdyn_sessionparticipant_SyncErrors);
        writer.writeStringValue("msdyn_sessionparticipantid", this.msdyn_sessionparticipantid);
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
