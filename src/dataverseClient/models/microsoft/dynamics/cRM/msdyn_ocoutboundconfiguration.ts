import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_oclanguageFromDiscriminatorValue} from './createMsdyn_oclanguageFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsystemmessageFromDiscriminatorValue} from './createMsdyn_ocsystemmessageFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_oclanguage, Msdyn_ocoutboundmessage, Msdyn_ocsystemmessage, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocoutboundconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultlocale_value?: string | undefined;
    private __msdyn_liveworkstreamid_value?: string | undefined;
    private __msdyn_messagetemplate_value?: string | undefined;
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
    private _msdyn_channel?: number | undefined;
    private _msdyn_channeldisplayname?: string | undefined;
    private _msdyn_channelid?: string | undefined;
    private _msdyn_defaultlocale?: Msdyn_oclanguage | undefined;
    private _msdyn_displayoutboundconfigurationid?: string | undefined;
    private _msdyn_enablemessagelogging?: boolean | undefined;
    private _msdyn_liveworkstreamid?: Msdyn_liveworkstream | undefined;
    private _msdyn_messagetemplate?: Msdyn_ocsystemmessage | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocoutboundconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocoutboundconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocoutboundconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocoutboundconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocoutboundconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocoutboundconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocoutboundconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocoutboundconfigurationid?: string | undefined;
    private _msdyn_ocoutboundmessage_msdyn_ocoutbound?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_ocscope?: number | undefined;
    private _msdyn_secondarychanneldisplayname?: string | undefined;
    private _msdyn_secondarychannelid?: string | undefined;
    private _msdyn_showinactivities?: boolean | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_usecustomerpreference?: boolean | undefined;
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
     * Gets the _msdyn_defaultlocale_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultlocale_value() {
        return this.__msdyn_defaultlocale_value;
    };
    /**
     * Sets the _msdyn_defaultlocale_value property value. 
     * @param value Value to set for the _msdyn_defaultlocale_value property.
     */
    public set _msdyn_defaultlocale_value(value: string | undefined) {
        this.__msdyn_defaultlocale_value = value;
    };
    /**
     * Gets the _msdyn_liveworkstreamid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkstreamid_value() {
        return this.__msdyn_liveworkstreamid_value;
    };
    /**
     * Sets the _msdyn_liveworkstreamid_value property value. 
     * @param value Value to set for the _msdyn_liveworkstreamid_value property.
     */
    public set _msdyn_liveworkstreamid_value(value: string | undefined) {
        this.__msdyn_liveworkstreamid_value = value;
    };
    /**
     * Gets the _msdyn_messagetemplate_value property value. 
     * @returns a string
     */
    public get _msdyn_messagetemplate_value() {
        return this.__msdyn_messagetemplate_value;
    };
    /**
     * Sets the _msdyn_messagetemplate_value property value. 
     * @param value Value to set for the _msdyn_messagetemplate_value property.
     */
    public set _msdyn_messagetemplate_value(value: string | undefined) {
        this.__msdyn_messagetemplate_value = value;
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
     * Instantiates a new msdyn_ocoutboundconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultlocale_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._msdyn_defaultlocale_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_msdyn_messagetemplate_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._msdyn_messagetemplate_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_channel": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_channel = n.getNumberValue(); },
            "msdyn_channeldisplayname": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_channeldisplayname = n.getStringValue(); },
            "msdyn_channelid": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_channelid = n.getStringValue(); },
            "msdyn_defaultlocale": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_defaultlocale = n.getObjectValue<Msdyn_oclanguage>(createMsdyn_oclanguageFromDiscriminatorValue); },
            "msdyn_displayoutboundconfigurationid": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_displayoutboundconfigurationid = n.getStringValue(); },
            "msdyn_enablemessagelogging": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_enablemessagelogging = n.getBooleanValue(); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_liveworkstreamid = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_messagetemplate": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_messagetemplate = n.getObjectValue<Msdyn_ocsystemmessage>(createMsdyn_ocsystemmessageFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_ocoutboundconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocoutboundconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocoutboundconfigurationid": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundconfigurationid = n.getStringValue(); },
            "msdyn_ocoutboundmessage_msdyn_ocoutbound": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocoutboundmessage_msdyn_ocoutbound = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_ocscope": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_ocscope = n.getNumberValue(); },
            "msdyn_secondarychanneldisplayname": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_secondarychanneldisplayname = n.getStringValue(); },
            "msdyn_secondarychannelid": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_secondarychannelid = n.getStringValue(); },
            "msdyn_showinactivities": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_showinactivities = n.getBooleanValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_type = n.getNumberValue(); },
            "msdyn_usecustomerpreference": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).msdyn_usecustomerpreference = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocoutboundconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_channel property value. 
     * @returns a integer
     */
    public get msdyn_channel() {
        return this._msdyn_channel;
    };
    /**
     * Sets the msdyn_channel property value. 
     * @param value Value to set for the msdyn_channel property.
     */
    public set msdyn_channel(value: number | undefined) {
        this._msdyn_channel = value;
    };
    /**
     * Gets the msdyn_channeldisplayname property value. 
     * @returns a string
     */
    public get msdyn_channeldisplayname() {
        return this._msdyn_channeldisplayname;
    };
    /**
     * Sets the msdyn_channeldisplayname property value. 
     * @param value Value to set for the msdyn_channeldisplayname property.
     */
    public set msdyn_channeldisplayname(value: string | undefined) {
        this._msdyn_channeldisplayname = value;
    };
    /**
     * Gets the msdyn_channelid property value. 
     * @returns a string
     */
    public get msdyn_channelid() {
        return this._msdyn_channelid;
    };
    /**
     * Sets the msdyn_channelid property value. 
     * @param value Value to set for the msdyn_channelid property.
     */
    public set msdyn_channelid(value: string | undefined) {
        this._msdyn_channelid = value;
    };
    /**
     * Gets the msdyn_defaultlocale property value. 
     * @returns a msdyn_oclanguage
     */
    public get msdyn_defaultlocale() {
        return this._msdyn_defaultlocale;
    };
    /**
     * Sets the msdyn_defaultlocale property value. 
     * @param value Value to set for the msdyn_defaultlocale property.
     */
    public set msdyn_defaultlocale(value: Msdyn_oclanguage | undefined) {
        this._msdyn_defaultlocale = value;
    };
    /**
     * Gets the msdyn_displayoutboundconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_displayoutboundconfigurationid() {
        return this._msdyn_displayoutboundconfigurationid;
    };
    /**
     * Sets the msdyn_displayoutboundconfigurationid property value. 
     * @param value Value to set for the msdyn_displayoutboundconfigurationid property.
     */
    public set msdyn_displayoutboundconfigurationid(value: string | undefined) {
        this._msdyn_displayoutboundconfigurationid = value;
    };
    /**
     * Gets the msdyn_enablemessagelogging property value. 
     * @returns a boolean
     */
    public get msdyn_enablemessagelogging() {
        return this._msdyn_enablemessagelogging;
    };
    /**
     * Sets the msdyn_enablemessagelogging property value. 
     * @param value Value to set for the msdyn_enablemessagelogging property.
     */
    public set msdyn_enablemessagelogging(value: boolean | undefined) {
        this._msdyn_enablemessagelogging = value;
    };
    /**
     * Gets the msdyn_liveworkstreamid property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_liveworkstreamid() {
        return this._msdyn_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstreamid property.
     */
    public set msdyn_liveworkstreamid(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_messagetemplate property value. 
     * @returns a msdyn_ocsystemmessage
     */
    public get msdyn_messagetemplate() {
        return this._msdyn_messagetemplate;
    };
    /**
     * Sets the msdyn_messagetemplate property value. 
     * @param value Value to set for the msdyn_messagetemplate property.
     */
    public set msdyn_messagetemplate(value: Msdyn_ocsystemmessage | undefined) {
        this._msdyn_messagetemplate = value;
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
     * Gets the msdyn_ocoutboundconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocoutboundconfiguration_AsyncOperations() {
        return this._msdyn_ocoutboundconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_AsyncOperations property.
     */
    public set msdyn_ocoutboundconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocoutboundconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocoutboundconfiguration_BulkDeleteFailures() {
        return this._msdyn_ocoutboundconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_ocoutboundconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocoutboundconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocoutboundconfiguration_DuplicateBaseRecord() {
        return this._msdyn_ocoutboundconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_ocoutboundconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocoutboundconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocoutboundconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_ocoutboundconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_ocoutboundconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocoutboundconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocoutboundconfiguration_MailboxTrackingFolders() {
        return this._msdyn_ocoutboundconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_ocoutboundconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocoutboundconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocoutboundconfiguration_ProcessSession() {
        return this._msdyn_ocoutboundconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_ProcessSession property.
     */
    public set msdyn_ocoutboundconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocoutboundconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocoutboundconfiguration_SyncErrors() {
        return this._msdyn_ocoutboundconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_ocoutboundconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocoutboundconfiguration_SyncErrors property.
     */
    public set msdyn_ocoutboundconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocoutboundconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocoutboundconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_ocoutboundconfigurationid() {
        return this._msdyn_ocoutboundconfigurationid;
    };
    /**
     * Sets the msdyn_ocoutboundconfigurationid property value. 
     * @param value Value to set for the msdyn_ocoutboundconfigurationid property.
     */
    public set msdyn_ocoutboundconfigurationid(value: string | undefined) {
        this._msdyn_ocoutboundconfigurationid = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_msdyn_ocoutbound property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_msdyn_ocoutbound() {
        return this._msdyn_ocoutboundmessage_msdyn_ocoutbound;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_msdyn_ocoutbound property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_msdyn_ocoutbound property.
     */
    public set msdyn_ocoutboundmessage_msdyn_ocoutbound(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_msdyn_ocoutbound = value;
    };
    /**
     * Gets the msdyn_ocscope property value. 
     * @returns a integer
     */
    public get msdyn_ocscope() {
        return this._msdyn_ocscope;
    };
    /**
     * Sets the msdyn_ocscope property value. 
     * @param value Value to set for the msdyn_ocscope property.
     */
    public set msdyn_ocscope(value: number | undefined) {
        this._msdyn_ocscope = value;
    };
    /**
     * Gets the msdyn_secondarychanneldisplayname property value. 
     * @returns a string
     */
    public get msdyn_secondarychanneldisplayname() {
        return this._msdyn_secondarychanneldisplayname;
    };
    /**
     * Sets the msdyn_secondarychanneldisplayname property value. 
     * @param value Value to set for the msdyn_secondarychanneldisplayname property.
     */
    public set msdyn_secondarychanneldisplayname(value: string | undefined) {
        this._msdyn_secondarychanneldisplayname = value;
    };
    /**
     * Gets the msdyn_secondarychannelid property value. 
     * @returns a string
     */
    public get msdyn_secondarychannelid() {
        return this._msdyn_secondarychannelid;
    };
    /**
     * Sets the msdyn_secondarychannelid property value. 
     * @param value Value to set for the msdyn_secondarychannelid property.
     */
    public set msdyn_secondarychannelid(value: string | undefined) {
        this._msdyn_secondarychannelid = value;
    };
    /**
     * Gets the msdyn_showinactivities property value. 
     * @returns a boolean
     */
    public get msdyn_showinactivities() {
        return this._msdyn_showinactivities;
    };
    /**
     * Sets the msdyn_showinactivities property value. 
     * @param value Value to set for the msdyn_showinactivities property.
     */
    public set msdyn_showinactivities(value: boolean | undefined) {
        this._msdyn_showinactivities = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_usecustomerpreference property value. 
     * @returns a boolean
     */
    public get msdyn_usecustomerpreference() {
        return this._msdyn_usecustomerpreference;
    };
    /**
     * Sets the msdyn_usecustomerpreference property value. 
     * @param value Value to set for the msdyn_usecustomerpreference property.
     */
    public set msdyn_usecustomerpreference(value: boolean | undefined) {
        this._msdyn_usecustomerpreference = value;
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
        writer.writeStringValue("_msdyn_defaultlocale_value", this._msdyn_defaultlocale_value);
        writer.writeStringValue("_msdyn_liveworkstreamid_value", this._msdyn_liveworkstreamid_value);
        writer.writeStringValue("_msdyn_messagetemplate_value", this._msdyn_messagetemplate_value);
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
        writer.writeNumberValue("msdyn_channel", this.msdyn_channel);
        writer.writeStringValue("msdyn_channeldisplayname", this.msdyn_channeldisplayname);
        writer.writeStringValue("msdyn_channelid", this.msdyn_channelid);
        writer.writeObjectValue<Msdyn_oclanguage>("msdyn_defaultlocale", this.msdyn_defaultlocale);
        writer.writeStringValue("msdyn_displayoutboundconfigurationid", this.msdyn_displayoutboundconfigurationid);
        writer.writeBooleanValue("msdyn_enablemessagelogging", this.msdyn_enablemessagelogging);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeObjectValue<Msdyn_ocsystemmessage>("msdyn_messagetemplate", this.msdyn_messagetemplate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocoutboundconfiguration_AsyncOperations", this.msdyn_ocoutboundconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocoutboundconfiguration_BulkDeleteFailures", this.msdyn_ocoutboundconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocoutboundconfiguration_DuplicateBaseRecord", this.msdyn_ocoutboundconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocoutboundconfiguration_DuplicateMatchingRecord", this.msdyn_ocoutboundconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocoutboundconfiguration_MailboxTrackingFolders", this.msdyn_ocoutboundconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocoutboundconfiguration_ProcessSession", this.msdyn_ocoutboundconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocoutboundconfiguration_SyncErrors", this.msdyn_ocoutboundconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_ocoutboundconfigurationid", this.msdyn_ocoutboundconfigurationid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_msdyn_ocoutbound", this.msdyn_ocoutboundmessage_msdyn_ocoutbound);
        writer.writeNumberValue("msdyn_ocscope", this.msdyn_ocscope);
        writer.writeStringValue("msdyn_secondarychanneldisplayname", this.msdyn_secondarychanneldisplayname);
        writer.writeStringValue("msdyn_secondarychannelid", this.msdyn_secondarychannelid);
        writer.writeBooleanValue("msdyn_showinactivities", this.msdyn_showinactivities);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeBooleanValue("msdyn_usecustomerpreference", this.msdyn_usecustomerpreference);
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
