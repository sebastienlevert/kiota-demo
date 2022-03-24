import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createMsdyn_occustommessagingchannelFromDiscriminatorValue} from './createMsdyn_occustommessagingchannelFromDiscriminatorValue';
import {createMsdyn_ocfbpageFromDiscriminatorValue} from './createMsdyn_ocfbpageFromDiscriminatorValue';
import {createMsdyn_oclinechannelconfigFromDiscriminatorValue} from './createMsdyn_oclinechannelconfigFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_oclocalizationdataFromDiscriminatorValue} from './createMsdyn_oclocalizationdataFromDiscriminatorValue';
import {createMsdyn_ocoutboundconfigurationFromDiscriminatorValue} from './createMsdyn_ocoutboundconfigurationFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocrecordingFromDiscriminatorValue} from './createMsdyn_ocrecordingFromDiscriminatorValue';
import {createMsdyn_ocsmschannelsettingFromDiscriminatorValue} from './createMsdyn_ocsmschannelsettingFromDiscriminatorValue';
import {createMsdyn_ocsystemmessageFromDiscriminatorValue} from './createMsdyn_ocsystemmessageFromDiscriminatorValue';
import {createMsdyn_octeamschannelconfigFromDiscriminatorValue} from './createMsdyn_octeamschannelconfigFromDiscriminatorValue';
import {createMsdyn_octwitterhandleFromDiscriminatorValue} from './createMsdyn_octwitterhandleFromDiscriminatorValue';
import {createMsdyn_ocwechatchannelconfigFromDiscriminatorValue} from './createMsdyn_ocwechatchannelconfigFromDiscriminatorValue';
import {createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue} from './createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue';
import {createMsdyn_smsnumberFromDiscriminatorValue} from './createMsdyn_smsnumberFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_livechatconfig, Msdyn_occustommessagingchannel, Msdyn_ocfbpage, Msdyn_oclinechannelconfig, Msdyn_ocliveworkitem, Msdyn_oclocalizationdata, Msdyn_ocoutboundconfiguration, Msdyn_ocoutboundmessage, Msdyn_ocrecording, Msdyn_ocsmschannelsetting, Msdyn_ocsystemmessage, Msdyn_octeamschannelconfig, Msdyn_octwitterhandle, Msdyn_ocwechatchannelconfig, Msdyn_ocwhatsappchannelnumber, Msdyn_smsnumber, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_oclanguage extends Crmbaseentity implements Parsable {
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
    private _msdyn_languagename?: string | undefined;
    private _msdyn_localecode?: string | undefined;
    private _msdyn_localeid?: number | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage?: Msdyn_occustommessagingchannel[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage?: Msdyn_ocfbpage[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage?: Msdyn_oclinechannelconfig[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale?: Msdyn_ocoutboundconfiguration[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage?: Msdyn_ocrecording[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage?: Msdyn_ocsmschannelsetting[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage?: Msdyn_ocsystemmessage[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage?: Msdyn_octeamschannelconfig[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage?: Msdyn_octwitterhandle[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage?: Msdyn_ocwechatchannelconfig[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage?: Msdyn_ocwhatsappchannelnumber[] | undefined;
    private _msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage?: Msdyn_smsnumber[] | undefined;
    private _msdyn_oclanguage_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_oclanguage_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_oclanguage_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_oclanguage_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_oclanguage_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_oclanguage_msdyn_oclocalizationdata?: Msdyn_oclocalizationdata[] | undefined;
    private _msdyn_oclanguage_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_oclanguage_ProcessSession?: Processsession[] | undefined;
    private _msdyn_oclanguage_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_oclanguageid?: string | undefined;
    private _msdyn_ocoutboundmessage_occustomerlocale?: Msdyn_ocoutboundmessage[] | undefined;
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
     * Instantiates a new msdyn_oclanguage and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_oclanguage)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_oclanguage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_oclanguage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_oclanguage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_oclanguage).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_oclanguage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_oclanguage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_oclanguage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_languagename": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_languagename = n.getStringValue(); },
            "msdyn_localecode": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_localecode = n.getStringValue(); },
            "msdyn_localeid": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_localeid = n.getNumberValue(); },
            "msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage = n.getCollectionOfObjectValues<Msdyn_occustommessagingchannel>(createMsdyn_occustommessagingchannelFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage = n.getCollectionOfObjectValues<Msdyn_ocfbpage>(createMsdyn_ocfbpageFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage = n.getCollectionOfObjectValues<Msdyn_oclinechannelconfig>(createMsdyn_oclinechannelconfigFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale = n.getCollectionOfObjectValues<Msdyn_ocoutboundconfiguration>(createMsdyn_ocoutboundconfigurationFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage = n.getCollectionOfObjectValues<Msdyn_ocrecording>(createMsdyn_ocrecordingFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage = n.getCollectionOfObjectValues<Msdyn_ocsmschannelsetting>(createMsdyn_ocsmschannelsettingFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage = n.getCollectionOfObjectValues<Msdyn_ocsystemmessage>(createMsdyn_ocsystemmessageFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage = n.getCollectionOfObjectValues<Msdyn_octeamschannelconfig>(createMsdyn_octeamschannelconfigFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage = n.getCollectionOfObjectValues<Msdyn_octwitterhandle>(createMsdyn_octwitterhandleFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage = n.getCollectionOfObjectValues<Msdyn_ocwechatchannelconfig>(createMsdyn_ocwechatchannelconfigFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage = n.getCollectionOfObjectValues<Msdyn_ocwhatsappchannelnumber>(createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue); },
            "msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage = n.getCollectionOfObjectValues<Msdyn_smsnumber>(createMsdyn_smsnumberFromDiscriminatorValue); },
            "msdyn_oclanguage_AsyncOperations": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_oclanguage_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_oclanguage_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_oclanguage_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_oclanguage_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_oclanguage_msdyn_oclocalizationdata": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_msdyn_oclocalizationdata = n.getCollectionOfObjectValues<Msdyn_oclocalizationdata>(createMsdyn_oclocalizationdataFromDiscriminatorValue); },
            "msdyn_oclanguage_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_oclanguage_ProcessSession": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_oclanguage_SyncErrors": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguage_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_oclanguageid": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_oclanguageid = n.getStringValue(); },
            "msdyn_ocoutboundmessage_occustomerlocale": (o, n) => { (o as unknown as Msdyn_oclanguage).msdyn_ocoutboundmessage_occustomerlocale = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_oclanguage).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_oclanguage).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_oclanguage).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_oclanguage).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_oclanguage).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_oclanguage).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_oclanguage).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_oclanguage).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_oclanguage).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_oclanguage).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_languagename property value. 
     * @returns a string
     */
    public get msdyn_languagename() {
        return this._msdyn_languagename;
    };
    /**
     * Sets the msdyn_languagename property value. 
     * @param value Value to set for the msdyn_languagename property.
     */
    public set msdyn_languagename(value: string | undefined) {
        this._msdyn_languagename = value;
    };
    /**
     * Gets the msdyn_localecode property value. 
     * @returns a string
     */
    public get msdyn_localecode() {
        return this._msdyn_localecode;
    };
    /**
     * Sets the msdyn_localecode property value. 
     * @param value Value to set for the msdyn_localecode property.
     */
    public set msdyn_localecode(value: string | undefined) {
        this._msdyn_localecode = value;
    };
    /**
     * Gets the msdyn_localeid property value. 
     * @returns a integer
     */
    public get msdyn_localeid() {
        return this._msdyn_localeid;
    };
    /**
     * Sets the msdyn_localeid property value. 
     * @param value Value to set for the msdyn_localeid property.
     */
    public set msdyn_localeid(value: number | undefined) {
        this._msdyn_localeid = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage property value. 
     * @returns a msdyn_occustommessagingchannel
     */
    public get msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage(value: Msdyn_occustommessagingchannel[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage property value. 
     * @returns a msdyn_ocfbpage
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage(value: Msdyn_ocfbpage[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage property value. 
     * @returns a msdyn_oclinechannelconfig
     */
    public get msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage(value: Msdyn_oclinechannelconfig[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale property value. 
     * @returns a msdyn_ocoutboundconfiguration
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale(value: Msdyn_ocoutboundconfiguration[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage property value. 
     * @returns a msdyn_ocrecording
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage(value: Msdyn_ocrecording[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage property value. 
     * @returns a msdyn_ocsmschannelsetting
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage(value: Msdyn_ocsmschannelsetting[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage property value. 
     * @returns a msdyn_ocsystemmessage
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage(value: Msdyn_ocsystemmessage[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage property value. 
     * @returns a msdyn_octeamschannelconfig
     */
    public get msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage(value: Msdyn_octeamschannelconfig[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage property value. 
     * @returns a msdyn_octwitterhandle
     */
    public get msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage(value: Msdyn_octwitterhandle[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage property value. 
     * @returns a msdyn_ocwechatchannelconfig
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage(value: Msdyn_ocwechatchannelconfig[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage property value. 
     * @returns a msdyn_ocwhatsappchannelnumber
     */
    public get msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage(value: Msdyn_ocwhatsappchannelnumber[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage = value;
    };
    /**
     * Gets the msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage property value. 
     * @returns a msdyn_smsnumber
     */
    public get msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage() {
        return this._msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage;
    };
    /**
     * Sets the msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage property value. 
     * @param value Value to set for the msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage property.
     */
    public set msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage(value: Msdyn_smsnumber[] | undefined) {
        this._msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage = value;
    };
    /**
     * Gets the msdyn_oclanguage_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_oclanguage_AsyncOperations() {
        return this._msdyn_oclanguage_AsyncOperations;
    };
    /**
     * Sets the msdyn_oclanguage_AsyncOperations property value. 
     * @param value Value to set for the msdyn_oclanguage_AsyncOperations property.
     */
    public set msdyn_oclanguage_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_oclanguage_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_oclanguage_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_oclanguage_BulkDeleteFailures() {
        return this._msdyn_oclanguage_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_oclanguage_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_oclanguage_BulkDeleteFailures property.
     */
    public set msdyn_oclanguage_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_oclanguage_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_oclanguage_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_oclanguage_DuplicateBaseRecord() {
        return this._msdyn_oclanguage_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_oclanguage_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_oclanguage_DuplicateBaseRecord property.
     */
    public set msdyn_oclanguage_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_oclanguage_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_oclanguage_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_oclanguage_DuplicateMatchingRecord() {
        return this._msdyn_oclanguage_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_oclanguage_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_oclanguage_DuplicateMatchingRecord property.
     */
    public set msdyn_oclanguage_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_oclanguage_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_oclanguage_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_oclanguage_MailboxTrackingFolders() {
        return this._msdyn_oclanguage_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_oclanguage_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_oclanguage_MailboxTrackingFolders property.
     */
    public set msdyn_oclanguage_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_oclanguage_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_oclanguage_msdyn_oclocalizationdata property value. 
     * @returns a msdyn_oclocalizationdata
     */
    public get msdyn_oclanguage_msdyn_oclocalizationdata() {
        return this._msdyn_oclanguage_msdyn_oclocalizationdata;
    };
    /**
     * Sets the msdyn_oclanguage_msdyn_oclocalizationdata property value. 
     * @param value Value to set for the msdyn_oclanguage_msdyn_oclocalizationdata property.
     */
    public set msdyn_oclanguage_msdyn_oclocalizationdata(value: Msdyn_oclocalizationdata[] | undefined) {
        this._msdyn_oclanguage_msdyn_oclocalizationdata = value;
    };
    /**
     * Gets the msdyn_oclanguage_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_oclanguage_PrincipalObjectAttributeAccesses() {
        return this._msdyn_oclanguage_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_oclanguage_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_oclanguage_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_oclanguage_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_oclanguage_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_oclanguage_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_oclanguage_ProcessSession() {
        return this._msdyn_oclanguage_ProcessSession;
    };
    /**
     * Sets the msdyn_oclanguage_ProcessSession property value. 
     * @param value Value to set for the msdyn_oclanguage_ProcessSession property.
     */
    public set msdyn_oclanguage_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_oclanguage_ProcessSession = value;
    };
    /**
     * Gets the msdyn_oclanguage_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_oclanguage_SyncErrors() {
        return this._msdyn_oclanguage_SyncErrors;
    };
    /**
     * Sets the msdyn_oclanguage_SyncErrors property value. 
     * @param value Value to set for the msdyn_oclanguage_SyncErrors property.
     */
    public set msdyn_oclanguage_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_oclanguage_SyncErrors = value;
    };
    /**
     * Gets the msdyn_oclanguageid property value. 
     * @returns a string
     */
    public get msdyn_oclanguageid() {
        return this._msdyn_oclanguageid;
    };
    /**
     * Sets the msdyn_oclanguageid property value. 
     * @param value Value to set for the msdyn_oclanguageid property.
     */
    public set msdyn_oclanguageid(value: string | undefined) {
        this._msdyn_oclanguageid = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_occustomerlocale property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_occustomerlocale() {
        return this._msdyn_ocoutboundmessage_occustomerlocale;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_occustomerlocale property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_occustomerlocale property.
     */
    public set msdyn_ocoutboundmessage_occustomerlocale(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_occustomerlocale = value;
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
        writer.writeStringValue("msdyn_languagename", this.msdyn_languagename);
        writer.writeStringValue("msdyn_localecode", this.msdyn_localecode);
        writer.writeNumberValue("msdyn_localeid", this.msdyn_localeid);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage", this.msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage);
        writer.writeCollectionOfObjectValues<Msdyn_occustommessagingchannel>("msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage", this.msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage);
        writer.writeCollectionOfObjectValues<Msdyn_ocfbpage>("msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage", this.msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage);
        writer.writeCollectionOfObjectValues<Msdyn_oclinechannelconfig>("msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage", this.msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid", this.msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundconfiguration>("msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale", this.msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale);
        writer.writeCollectionOfObjectValues<Msdyn_ocrecording>("msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage", this.msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage);
        writer.writeCollectionOfObjectValues<Msdyn_ocsmschannelsetting>("msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage", this.msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage);
        writer.writeCollectionOfObjectValues<Msdyn_ocsystemmessage>("msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage", this.msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage);
        writer.writeCollectionOfObjectValues<Msdyn_octeamschannelconfig>("msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage", this.msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage);
        writer.writeCollectionOfObjectValues<Msdyn_octwitterhandle>("msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage", this.msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage);
        writer.writeCollectionOfObjectValues<Msdyn_ocwechatchannelconfig>("msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage", this.msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage);
        writer.writeCollectionOfObjectValues<Msdyn_ocwhatsappchannelnumber>("msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage", this.msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage);
        writer.writeCollectionOfObjectValues<Msdyn_smsnumber>("msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage", this.msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_oclanguage_AsyncOperations", this.msdyn_oclanguage_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_oclanguage_BulkDeleteFailures", this.msdyn_oclanguage_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_oclanguage_DuplicateBaseRecord", this.msdyn_oclanguage_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_oclanguage_DuplicateMatchingRecord", this.msdyn_oclanguage_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_oclanguage_MailboxTrackingFolders", this.msdyn_oclanguage_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_oclocalizationdata>("msdyn_oclanguage_msdyn_oclocalizationdata", this.msdyn_oclanguage_msdyn_oclocalizationdata);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_oclanguage_PrincipalObjectAttributeAccesses", this.msdyn_oclanguage_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_oclanguage_ProcessSession", this.msdyn_oclanguage_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_oclanguage_SyncErrors", this.msdyn_oclanguage_SyncErrors);
        writer.writeStringValue("msdyn_oclanguageid", this.msdyn_oclanguageid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_occustomerlocale", this.msdyn_ocoutboundmessage_occustomerlocale);
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
