import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_cannedmessageFromDiscriminatorValue} from './createMsdyn_cannedmessageFromDiscriminatorValue';
import {createMsdyn_decisioncontractFromDiscriminatorValue} from './createMsdyn_decisioncontractFromDiscriminatorValue';
import {createMsdyn_entityconfigFromDiscriminatorValue} from './createMsdyn_entityconfigFromDiscriminatorValue';
import {createMsdyn_entityroutingconfigurationFromDiscriminatorValue} from './createMsdyn_entityroutingconfigurationFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createMsdyn_liveconversationFromDiscriminatorValue} from './createMsdyn_liveconversationFromDiscriminatorValue';
import {createMsdyn_liveworkstreamcapacityprofileFromDiscriminatorValue} from './createMsdyn_liveworkstreamcapacityprofileFromDiscriminatorValue';
import {createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue} from './createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue';
import {createMsdyn_occustommessagingchannelFromDiscriminatorValue} from './createMsdyn_occustommessagingchannelFromDiscriminatorValue';
import {createMsdyn_ocfbpageFromDiscriminatorValue} from './createMsdyn_ocfbpageFromDiscriminatorValue';
import {createMsdyn_oclinechannelconfigFromDiscriminatorValue} from './createMsdyn_oclinechannelconfigFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue} from './createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue';
import {createMsdyn_ocoutboundconfigurationFromDiscriminatorValue} from './createMsdyn_ocoutboundconfigurationFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocruleitemFromDiscriminatorValue} from './createMsdyn_ocruleitemFromDiscriminatorValue';
import {createMsdyn_ocsmschannelsettingFromDiscriminatorValue} from './createMsdyn_ocsmschannelsettingFromDiscriminatorValue';
import {createMsdyn_octeamschannelconfigFromDiscriminatorValue} from './createMsdyn_octeamschannelconfigFromDiscriminatorValue';
import {createMsdyn_octwitterhandleFromDiscriminatorValue} from './createMsdyn_octwitterhandleFromDiscriminatorValue';
import {createMsdyn_ocwechatchannelconfigFromDiscriminatorValue} from './createMsdyn_ocwechatchannelconfigFromDiscriminatorValue';
import {createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue} from './createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue';
import {createMsdyn_routingconfigurationFromDiscriminatorValue} from './createMsdyn_routingconfigurationFromDiscriminatorValue';
import {createMsdyn_rulesetdependencymappingFromDiscriminatorValue} from './createMsdyn_rulesetdependencymappingFromDiscriminatorValue';
import {createMsdyn_scenarioFromDiscriminatorValue} from './createMsdyn_scenarioFromDiscriminatorValue';
import {createMsdyn_skillattachmentruleitemFromDiscriminatorValue} from './createMsdyn_skillattachmentruleitemFromDiscriminatorValue';
import {createMsdyn_smsnumberFromDiscriminatorValue} from './createMsdyn_smsnumberFromDiscriminatorValue';
import {createMsdyn_surveyquestionFromDiscriminatorValue} from './createMsdyn_surveyquestionFromDiscriminatorValue';
import {createMsdyn_unifiedroutingrunFromDiscriminatorValue} from './createMsdyn_unifiedroutingrunFromDiscriminatorValue';
import {createMsdyn_urnotificationtemplatemappingFromDiscriminatorValue} from './createMsdyn_urnotificationtemplatemappingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_cannedmessage, Msdyn_decisioncontract, Msdyn_entityconfig, Msdyn_entityroutingconfiguration, Msdyn_livechatconfig, Msdyn_liveconversation, Msdyn_liveworkstreamcapacityprofile, Msdyn_masterentityroutingconfiguration, Msdyn_occustommessagingchannel, Msdyn_ocfbpage, Msdyn_oclinechannelconfig, Msdyn_ocliveworkitem, Msdyn_ocliveworkstreamcontextvariable, Msdyn_ocoutboundconfiguration, Msdyn_ocoutboundmessage, Msdyn_ocruleitem, Msdyn_ocsmschannelsetting, Msdyn_octeamschannelconfig, Msdyn_octwitterhandle, Msdyn_ocwechatchannelconfig, Msdyn_ocwhatsappchannelnumber, Msdyn_routingconfiguration, Msdyn_rulesetdependencymapping, Msdyn_scenario, Msdyn_skillattachmentruleitem, Msdyn_smsnumber, Msdyn_surveyquestion, Msdyn_unifiedroutingrun, Msdyn_urnotificationtemplatemapping, Principal, Principalobjectattributeaccess, Processsession, Queue, Queueitem, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_liveworkstream extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bot_queue_value?: string | undefined;
    private __msdyn_bot_user_value?: string | undefined;
    private __msdyn_entityroutingconfigurationid_value?: string | undefined;
    private __msdyn_masterentityroutingconfigurationid_value?: string | undefined;
    private __msdyn_outboundqueueid_value?: string | undefined;
    private __msdyn_routingcontractid_value?: string | undefined;
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
    private _msdyn_allowedpresences?: string | undefined;
    private _msdyn_apikey?: string | undefined;
    private _msdyn_apikeyversionnumber?: number | undefined;
    private _msdyn_assignworkitemafterdecline?: number | undefined;
    private _msdyn_autocloseafterinactivity?: number | undefined;
    private _msdyn_blockcapacityforwrapup?: number | undefined;
    private _msdyn_bot_queue?: Queue | undefined;
    private _msdyn_bot_rule?: string | undefined;
    private _msdyn_bot_user?: Systemuser | undefined;
    private _msdyn_capacityformat?: number | undefined;
    private _msdyn_capacityrequired?: number | undefined;
    private _msdyn_connectorsurl?: string | undefined;
    private _msdyn_conversationmode?: number | undefined;
    private _msdyn_customerid?: string | undefined;
    private _msdyn_direction?: number | undefined;
    private _msdyn_enableagentaffinity?: boolean | undefined;
    private _msdyn_enableautomatedmessages?: boolean | undefined;
    private _msdyn_enableselectingfrompushbasedworkstreams?: boolean | undefined;
    private _msdyn_entityroutingconfigurationId?: Msdyn_entityroutingconfiguration | undefined;
    private _msdyn_fallbacklanguage?: string | undefined;
    private _msdyn_followupafterwaiting?: number | undefined;
    private _msdyn_handlingtimethreshold?: number | undefined;
    private _msdyn_isdefault?: boolean | undefined;
    private _msdyn_lastvalidationon?: Date | undefined;
    private _msdyn_lastvalidationstatus?: string | undefined;
    private _msdyn_liveworkstream_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_liveworkstream_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_liveworkstream_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile?: Msdyn_liveworkstreamcapacityprofile[] | undefined;
    private _msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid?: Msdyn_routingconfiguration[] | undefined;
    private _msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: Msdyn_rulesetdependencymapping[] | undefined;
    private _msdyn_liveworkstream_ocruleitem?: Msdyn_ocruleitem[] | undefined;
    private _msdyn_liveworkstream_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_liveworkstream_ProcessSession?: Processsession[] | undefined;
    private _msdyn_liveworkstream_queueitem_liveworkstreamid?: Queueitem[] | undefined;
    private _msdyn_liveworkstream_skillattachmentruleitem?: Msdyn_skillattachmentruleitem[] | undefined;
    private _msdyn_liveworkstream_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_liveworkstreamid?: string | undefined;
    private _msdyn_masterentityroutingconfigurationId?: Msdyn_masterentityroutingconfiguration | undefined;
    private _msdyn_matchinglogic?: number | undefined;
    private _msdyn_maxconcurrentconnection?: number | undefined;
    private _msdyn_mode?: number | undefined;
    private _msdyn_msdyn_cannedmessage_liveworkstream?: Msdyn_cannedmessage[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_entityconfig?: Msdyn_entityconfig[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_liveconversation?: Msdyn_liveconversation[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid?: Msdyn_occustommessagingchannel[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_ocfbpage?: Msdyn_ocfbpage[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid?: Msdyn_oclinechannelconfig[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid?: Msdyn_ocliveworkstreamcontextvariable[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid?: Msdyn_ocsmschannelsetting[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid?: Msdyn_octeamschannelconfig[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid?: Msdyn_octwitterhandle[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid?: Msdyn_ocwechatchannelconfig[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid?: Msdyn_ocwhatsappchannelnumber[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_scenario?: Msdyn_scenario[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_smsnumber?: Msdyn_smsnumber[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_surveyquestion?: Msdyn_surveyquestion[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream?: Msdyn_unifiedroutingrun[] | undefined;
    private _msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream?: Msdyn_urnotificationtemplatemapping[] | undefined;
    private _msdyn_msdyn_liveworkstream_systemuser?: Systemuser[] | undefined;
    private _msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream?: Msdyn_ocoutboundconfiguration[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_notification?: number | undefined;
    private _msdyn_notificationscenarioplaceholder?: string | undefined;
    private _msdyn_notificationtemplate_consult?: string | undefined;
    private _msdyn_notificationtemplate_incoming_auth?: string | undefined;
    private _msdyn_notificationtemplate_incoming_unauth?: string | undefined;
    private _msdyn_notificationtemplate_supervisorassign?: string | undefined;
    private _msdyn_notificationtemplate_transfer?: string | undefined;
    private _msdyn_ocoutboundmessage_ocliveworkstream?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_outboundqueueid?: Queue | undefined;
    private _msdyn_recordidentificationrule?: string | undefined;
    private _msdyn_recordidentificationvalidationrule?: string | undefined;
    private _msdyn_routingcontractid?: Msdyn_decisioncontract | undefined;
    private _msdyn_screenpoptimeout?: number | undefined;
    private _msdyn_screenpoptimeout_optionSet?: number | undefined;
    private _msdyn_sessionscenarioplaceholder?: string | undefined;
    private _msdyn_sessiontemplate_default?: string | undefined;
    private _msdyn_skillattachmentrulescount?: number | undefined;
    private _msdyn_skillattachmentrulescount_date?: Date | undefined;
    private _msdyn_skillattachmentrulescount_state?: number | undefined;
    private _msdyn_smsprovider?: number | undefined;
    private _msdyn_streamsource?: number | undefined;
    private _msdyn_telesigninboundurl?: string | undefined;
    private _msdyn_twilioinboundurl?: string | undefined;
    private _msdyn_waitingtimethreshold?: number | undefined;
    private _msdyn_workdistributionmode?: number | undefined;
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
     * Gets the _msdyn_bot_queue_value property value. 
     * @returns a string
     */
    public get _msdyn_bot_queue_value() {
        return this.__msdyn_bot_queue_value;
    };
    /**
     * Sets the _msdyn_bot_queue_value property value. 
     * @param value Value to set for the _msdyn_bot_queue_value property.
     */
    public set _msdyn_bot_queue_value(value: string | undefined) {
        this.__msdyn_bot_queue_value = value;
    };
    /**
     * Gets the _msdyn_bot_user_value property value. 
     * @returns a string
     */
    public get _msdyn_bot_user_value() {
        return this.__msdyn_bot_user_value;
    };
    /**
     * Sets the _msdyn_bot_user_value property value. 
     * @param value Value to set for the _msdyn_bot_user_value property.
     */
    public set _msdyn_bot_user_value(value: string | undefined) {
        this.__msdyn_bot_user_value = value;
    };
    /**
     * Gets the _msdyn_entityroutingconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_entityroutingconfigurationid_value() {
        return this.__msdyn_entityroutingconfigurationid_value;
    };
    /**
     * Sets the _msdyn_entityroutingconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_entityroutingconfigurationid_value property.
     */
    public set _msdyn_entityroutingconfigurationid_value(value: string | undefined) {
        this.__msdyn_entityroutingconfigurationid_value = value;
    };
    /**
     * Gets the _msdyn_masterentityroutingconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_masterentityroutingconfigurationid_value() {
        return this.__msdyn_masterentityroutingconfigurationid_value;
    };
    /**
     * Sets the _msdyn_masterentityroutingconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_masterentityroutingconfigurationid_value property.
     */
    public set _msdyn_masterentityroutingconfigurationid_value(value: string | undefined) {
        this.__msdyn_masterentityroutingconfigurationid_value = value;
    };
    /**
     * Gets the _msdyn_outboundqueueid_value property value. 
     * @returns a string
     */
    public get _msdyn_outboundqueueid_value() {
        return this.__msdyn_outboundqueueid_value;
    };
    /**
     * Sets the _msdyn_outboundqueueid_value property value. 
     * @param value Value to set for the _msdyn_outboundqueueid_value property.
     */
    public set _msdyn_outboundqueueid_value(value: string | undefined) {
        this.__msdyn_outboundqueueid_value = value;
    };
    /**
     * Gets the _msdyn_routingcontractid_value property value. 
     * @returns a string
     */
    public get _msdyn_routingcontractid_value() {
        return this.__msdyn_routingcontractid_value;
    };
    /**
     * Sets the _msdyn_routingcontractid_value property value. 
     * @param value Value to set for the _msdyn_routingcontractid_value property.
     */
    public set _msdyn_routingcontractid_value(value: string | undefined) {
        this.__msdyn_routingcontractid_value = value;
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
     * Instantiates a new msdyn_liveworkstream and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bot_queue_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._msdyn_bot_queue_value = n.getStringValue(); },
            "_msdyn_bot_user_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._msdyn_bot_user_value = n.getStringValue(); },
            "_msdyn_entityroutingconfigurationid_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._msdyn_entityroutingconfigurationid_value = n.getStringValue(); },
            "_msdyn_masterentityroutingconfigurationid_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._msdyn_masterentityroutingconfigurationid_value = n.getStringValue(); },
            "_msdyn_outboundqueueid_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._msdyn_outboundqueueid_value = n.getStringValue(); },
            "_msdyn_routingcontractid_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._msdyn_routingcontractid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_liveworkstream)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_liveworkstream).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_liveworkstream).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_liveworkstream).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_liveworkstream).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_liveworkstream).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_liveworkstream).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_liveworkstream).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_allowedpresences": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_allowedpresences = n.getStringValue(); },
            "msdyn_apikey": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_apikey = n.getStringValue(); },
            "msdyn_apikeyversionnumber": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_apikeyversionnumber = n.getNumberValue(); },
            "msdyn_assignworkitemafterdecline": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_assignworkitemafterdecline = n.getNumberValue(); },
            "msdyn_autocloseafterinactivity": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_autocloseafterinactivity = n.getNumberValue(); },
            "msdyn_blockcapacityforwrapup": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_blockcapacityforwrapup = n.getNumberValue(); },
            "msdyn_bot_queue": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_bot_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_bot_rule": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_bot_rule = n.getStringValue(); },
            "msdyn_bot_user": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_bot_user = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_capacityformat": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_capacityformat = n.getNumberValue(); },
            "msdyn_capacityrequired": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_capacityrequired = n.getNumberValue(); },
            "msdyn_connectorsurl": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_connectorsurl = n.getStringValue(); },
            "msdyn_conversationmode": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_conversationmode = n.getNumberValue(); },
            "msdyn_customerid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_customerid = n.getStringValue(); },
            "msdyn_direction": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_direction = n.getNumberValue(); },
            "msdyn_enableagentaffinity": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_enableagentaffinity = n.getBooleanValue(); },
            "msdyn_enableautomatedmessages": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_enableautomatedmessages = n.getBooleanValue(); },
            "msdyn_enableselectingfrompushbasedworkstreams": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_enableselectingfrompushbasedworkstreams = n.getBooleanValue(); },
            "msdyn_entityroutingconfigurationId": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_entityroutingconfigurationId = n.getObjectValue<Msdyn_entityroutingconfiguration>(createMsdyn_entityroutingconfigurationFromDiscriminatorValue); },
            "msdyn_fallbacklanguage": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_fallbacklanguage = n.getStringValue(); },
            "msdyn_followupafterwaiting": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_followupafterwaiting = n.getNumberValue(); },
            "msdyn_handlingtimethreshold": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_handlingtimethreshold = n.getNumberValue(); },
            "msdyn_isdefault": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_isdefault = n.getBooleanValue(); },
            "msdyn_lastvalidationon": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_lastvalidationon = n.getDateValue(); },
            "msdyn_lastvalidationstatus": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_lastvalidationstatus = n.getStringValue(); },
            "msdyn_liveworkstream_AsyncOperations": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_liveworkstream_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_liveworkstream_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile = n.getCollectionOfObjectValues<Msdyn_liveworkstreamcapacityprofile>(createMsdyn_liveworkstreamcapacityprofileFromDiscriminatorValue); },
            "msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_routingconfiguration>(createMsdyn_routingconfigurationFromDiscriminatorValue); },
            "msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = n.getCollectionOfObjectValues<Msdyn_rulesetdependencymapping>(createMsdyn_rulesetdependencymappingFromDiscriminatorValue); },
            "msdyn_liveworkstream_ocruleitem": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_ocruleitem = n.getCollectionOfObjectValues<Msdyn_ocruleitem>(createMsdyn_ocruleitemFromDiscriminatorValue); },
            "msdyn_liveworkstream_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_liveworkstream_ProcessSession": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_liveworkstream_queueitem_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_queueitem_liveworkstreamid = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_liveworkstream_skillattachmentruleitem": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_skillattachmentruleitem = n.getCollectionOfObjectValues<Msdyn_skillattachmentruleitem>(createMsdyn_skillattachmentruleitemFromDiscriminatorValue); },
            "msdyn_liveworkstream_SyncErrors": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstream_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_liveworkstreamid = n.getStringValue(); },
            "msdyn_masterentityroutingconfigurationId": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_masterentityroutingconfigurationId = n.getObjectValue<Msdyn_masterentityroutingconfiguration>(createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue); },
            "msdyn_matchinglogic": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_matchinglogic = n.getNumberValue(); },
            "msdyn_maxconcurrentconnection": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_maxconcurrentconnection = n.getNumberValue(); },
            "msdyn_mode": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_mode = n.getNumberValue(); },
            "msdyn_msdyn_cannedmessage_liveworkstream": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_cannedmessage_liveworkstream = n.getCollectionOfObjectValues<Msdyn_cannedmessage>(createMsdyn_cannedmessageFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_entityconfig": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_entityconfig = n.getCollectionOfObjectValues<Msdyn_entityconfig>(createMsdyn_entityconfigFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_liveconversation": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_liveconversation = n.getCollectionOfObjectValues<Msdyn_liveconversation>(createMsdyn_liveconversationFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_occustommessagingchannel>(createMsdyn_occustommessagingchannelFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_ocfbpage": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_ocfbpage = n.getCollectionOfObjectValues<Msdyn_ocfbpage>(createMsdyn_ocfbpageFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_oclinechannelconfig>(createMsdyn_oclinechannelconfigFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_ocliveworkstreamcontextvariable>(createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_ocsmschannelsetting>(createMsdyn_ocsmschannelsettingFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_octeamschannelconfig>(createMsdyn_octeamschannelconfigFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_octwitterhandle>(createMsdyn_octwitterhandleFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_ocwechatchannelconfig>(createMsdyn_ocwechatchannelconfigFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid = n.getCollectionOfObjectValues<Msdyn_ocwhatsappchannelnumber>(createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_scenario": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_scenario = n.getCollectionOfObjectValues<Msdyn_scenario>(createMsdyn_scenarioFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_smsnumber": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_smsnumber = n.getCollectionOfObjectValues<Msdyn_smsnumber>(createMsdyn_smsnumberFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_surveyquestion": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_surveyquestion = n.getCollectionOfObjectValues<Msdyn_surveyquestion>(createMsdyn_surveyquestionFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream = n.getCollectionOfObjectValues<Msdyn_unifiedroutingrun>(createMsdyn_unifiedroutingrunFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream = n.getCollectionOfObjectValues<Msdyn_urnotificationtemplatemapping>(createMsdyn_urnotificationtemplatemappingFromDiscriminatorValue); },
            "msdyn_msdyn_liveworkstream_systemuser": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_liveworkstream_systemuser = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream = n.getCollectionOfObjectValues<Msdyn_ocoutboundconfiguration>(createMsdyn_ocoutboundconfigurationFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_name = n.getStringValue(); },
            "msdyn_notification": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notification = n.getNumberValue(); },
            "msdyn_notificationscenarioplaceholder": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notificationscenarioplaceholder = n.getStringValue(); },
            "msdyn_notificationtemplate_consult": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notificationtemplate_consult = n.getStringValue(); },
            "msdyn_notificationtemplate_incoming_auth": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notificationtemplate_incoming_auth = n.getStringValue(); },
            "msdyn_notificationtemplate_incoming_unauth": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notificationtemplate_incoming_unauth = n.getStringValue(); },
            "msdyn_notificationtemplate_supervisorassign": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notificationtemplate_supervisorassign = n.getStringValue(); },
            "msdyn_notificationtemplate_transfer": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_notificationtemplate_transfer = n.getStringValue(); },
            "msdyn_ocoutboundmessage_ocliveworkstream": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_ocoutboundmessage_ocliveworkstream = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_outboundqueueid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_outboundqueueid = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_recordidentificationrule": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_recordidentificationrule = n.getStringValue(); },
            "msdyn_recordidentificationvalidationrule": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_recordidentificationvalidationrule = n.getStringValue(); },
            "msdyn_routingcontractid": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_routingcontractid = n.getObjectValue<Msdyn_decisioncontract>(createMsdyn_decisioncontractFromDiscriminatorValue); },
            "msdyn_screenpoptimeout": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_screenpoptimeout = n.getNumberValue(); },
            "msdyn_screenpoptimeout_optionSet": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_screenpoptimeout_optionSet = n.getNumberValue(); },
            "msdyn_sessionscenarioplaceholder": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_sessionscenarioplaceholder = n.getStringValue(); },
            "msdyn_sessiontemplate_default": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_sessiontemplate_default = n.getStringValue(); },
            "msdyn_skillattachmentrulescount": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_skillattachmentrulescount = n.getNumberValue(); },
            "msdyn_skillattachmentrulescount_date": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_skillattachmentrulescount_date = n.getDateValue(); },
            "msdyn_skillattachmentrulescount_state": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_skillattachmentrulescount_state = n.getNumberValue(); },
            "msdyn_smsprovider": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_smsprovider = n.getNumberValue(); },
            "msdyn_streamsource": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_streamsource = n.getNumberValue(); },
            "msdyn_telesigninboundurl": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_telesigninboundurl = n.getStringValue(); },
            "msdyn_twilioinboundurl": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_twilioinboundurl = n.getStringValue(); },
            "msdyn_waitingtimethreshold": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_waitingtimethreshold = n.getNumberValue(); },
            "msdyn_workdistributionmode": (o, n) => { (o as unknown as Msdyn_liveworkstream).msdyn_workdistributionmode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_liveworkstream).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_liveworkstream).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_liveworkstream).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_liveworkstream).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_liveworkstream).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_liveworkstream).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_liveworkstream).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_liveworkstream).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_liveworkstream).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_liveworkstream).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_allowedpresences property value. 
     * @returns a string
     */
    public get msdyn_allowedpresences() {
        return this._msdyn_allowedpresences;
    };
    /**
     * Sets the msdyn_allowedpresences property value. 
     * @param value Value to set for the msdyn_allowedpresences property.
     */
    public set msdyn_allowedpresences(value: string | undefined) {
        this._msdyn_allowedpresences = value;
    };
    /**
     * Gets the msdyn_apikey property value. 
     * @returns a string
     */
    public get msdyn_apikey() {
        return this._msdyn_apikey;
    };
    /**
     * Sets the msdyn_apikey property value. 
     * @param value Value to set for the msdyn_apikey property.
     */
    public set msdyn_apikey(value: string | undefined) {
        this._msdyn_apikey = value;
    };
    /**
     * Gets the msdyn_apikeyversionnumber property value. 
     * @returns a integer
     */
    public get msdyn_apikeyversionnumber() {
        return this._msdyn_apikeyversionnumber;
    };
    /**
     * Sets the msdyn_apikeyversionnumber property value. 
     * @param value Value to set for the msdyn_apikeyversionnumber property.
     */
    public set msdyn_apikeyversionnumber(value: number | undefined) {
        this._msdyn_apikeyversionnumber = value;
    };
    /**
     * Gets the msdyn_assignworkitemafterdecline property value. 
     * @returns a integer
     */
    public get msdyn_assignworkitemafterdecline() {
        return this._msdyn_assignworkitemafterdecline;
    };
    /**
     * Sets the msdyn_assignworkitemafterdecline property value. 
     * @param value Value to set for the msdyn_assignworkitemafterdecline property.
     */
    public set msdyn_assignworkitemafterdecline(value: number | undefined) {
        this._msdyn_assignworkitemafterdecline = value;
    };
    /**
     * Gets the msdyn_autocloseafterinactivity property value. 
     * @returns a integer
     */
    public get msdyn_autocloseafterinactivity() {
        return this._msdyn_autocloseafterinactivity;
    };
    /**
     * Sets the msdyn_autocloseafterinactivity property value. 
     * @param value Value to set for the msdyn_autocloseafterinactivity property.
     */
    public set msdyn_autocloseafterinactivity(value: number | undefined) {
        this._msdyn_autocloseafterinactivity = value;
    };
    /**
     * Gets the msdyn_blockcapacityforwrapup property value. 
     * @returns a integer
     */
    public get msdyn_blockcapacityforwrapup() {
        return this._msdyn_blockcapacityforwrapup;
    };
    /**
     * Sets the msdyn_blockcapacityforwrapup property value. 
     * @param value Value to set for the msdyn_blockcapacityforwrapup property.
     */
    public set msdyn_blockcapacityforwrapup(value: number | undefined) {
        this._msdyn_blockcapacityforwrapup = value;
    };
    /**
     * Gets the msdyn_bot_queue property value. 
     * @returns a queue
     */
    public get msdyn_bot_queue() {
        return this._msdyn_bot_queue;
    };
    /**
     * Sets the msdyn_bot_queue property value. 
     * @param value Value to set for the msdyn_bot_queue property.
     */
    public set msdyn_bot_queue(value: Queue | undefined) {
        this._msdyn_bot_queue = value;
    };
    /**
     * Gets the msdyn_bot_rule property value. 
     * @returns a string
     */
    public get msdyn_bot_rule() {
        return this._msdyn_bot_rule;
    };
    /**
     * Sets the msdyn_bot_rule property value. 
     * @param value Value to set for the msdyn_bot_rule property.
     */
    public set msdyn_bot_rule(value: string | undefined) {
        this._msdyn_bot_rule = value;
    };
    /**
     * Gets the msdyn_bot_user property value. 
     * @returns a systemuser
     */
    public get msdyn_bot_user() {
        return this._msdyn_bot_user;
    };
    /**
     * Sets the msdyn_bot_user property value. 
     * @param value Value to set for the msdyn_bot_user property.
     */
    public set msdyn_bot_user(value: Systemuser | undefined) {
        this._msdyn_bot_user = value;
    };
    /**
     * Gets the msdyn_capacityformat property value. 
     * @returns a integer
     */
    public get msdyn_capacityformat() {
        return this._msdyn_capacityformat;
    };
    /**
     * Sets the msdyn_capacityformat property value. 
     * @param value Value to set for the msdyn_capacityformat property.
     */
    public set msdyn_capacityformat(value: number | undefined) {
        this._msdyn_capacityformat = value;
    };
    /**
     * Gets the msdyn_capacityrequired property value. 
     * @returns a integer
     */
    public get msdyn_capacityrequired() {
        return this._msdyn_capacityrequired;
    };
    /**
     * Sets the msdyn_capacityrequired property value. 
     * @param value Value to set for the msdyn_capacityrequired property.
     */
    public set msdyn_capacityrequired(value: number | undefined) {
        this._msdyn_capacityrequired = value;
    };
    /**
     * Gets the msdyn_connectorsurl property value. 
     * @returns a string
     */
    public get msdyn_connectorsurl() {
        return this._msdyn_connectorsurl;
    };
    /**
     * Sets the msdyn_connectorsurl property value. 
     * @param value Value to set for the msdyn_connectorsurl property.
     */
    public set msdyn_connectorsurl(value: string | undefined) {
        this._msdyn_connectorsurl = value;
    };
    /**
     * Gets the msdyn_conversationmode property value. 
     * @returns a integer
     */
    public get msdyn_conversationmode() {
        return this._msdyn_conversationmode;
    };
    /**
     * Sets the msdyn_conversationmode property value. 
     * @param value Value to set for the msdyn_conversationmode property.
     */
    public set msdyn_conversationmode(value: number | undefined) {
        this._msdyn_conversationmode = value;
    };
    /**
     * Gets the msdyn_customerid property value. 
     * @returns a string
     */
    public get msdyn_customerid() {
        return this._msdyn_customerid;
    };
    /**
     * Sets the msdyn_customerid property value. 
     * @param value Value to set for the msdyn_customerid property.
     */
    public set msdyn_customerid(value: string | undefined) {
        this._msdyn_customerid = value;
    };
    /**
     * Gets the msdyn_direction property value. 
     * @returns a integer
     */
    public get msdyn_direction() {
        return this._msdyn_direction;
    };
    /**
     * Sets the msdyn_direction property value. 
     * @param value Value to set for the msdyn_direction property.
     */
    public set msdyn_direction(value: number | undefined) {
        this._msdyn_direction = value;
    };
    /**
     * Gets the msdyn_enableagentaffinity property value. 
     * @returns a boolean
     */
    public get msdyn_enableagentaffinity() {
        return this._msdyn_enableagentaffinity;
    };
    /**
     * Sets the msdyn_enableagentaffinity property value. 
     * @param value Value to set for the msdyn_enableagentaffinity property.
     */
    public set msdyn_enableagentaffinity(value: boolean | undefined) {
        this._msdyn_enableagentaffinity = value;
    };
    /**
     * Gets the msdyn_enableautomatedmessages property value. 
     * @returns a boolean
     */
    public get msdyn_enableautomatedmessages() {
        return this._msdyn_enableautomatedmessages;
    };
    /**
     * Sets the msdyn_enableautomatedmessages property value. 
     * @param value Value to set for the msdyn_enableautomatedmessages property.
     */
    public set msdyn_enableautomatedmessages(value: boolean | undefined) {
        this._msdyn_enableautomatedmessages = value;
    };
    /**
     * Gets the msdyn_enableselectingfrompushbasedworkstreams property value. 
     * @returns a boolean
     */
    public get msdyn_enableselectingfrompushbasedworkstreams() {
        return this._msdyn_enableselectingfrompushbasedworkstreams;
    };
    /**
     * Sets the msdyn_enableselectingfrompushbasedworkstreams property value. 
     * @param value Value to set for the msdyn_enableselectingfrompushbasedworkstreams property.
     */
    public set msdyn_enableselectingfrompushbasedworkstreams(value: boolean | undefined) {
        this._msdyn_enableselectingfrompushbasedworkstreams = value;
    };
    /**
     * Gets the msdyn_entityroutingconfigurationId property value. 
     * @returns a msdyn_entityroutingconfiguration
     */
    public get msdyn_entityroutingconfigurationId() {
        return this._msdyn_entityroutingconfigurationId;
    };
    /**
     * Sets the msdyn_entityroutingconfigurationId property value. 
     * @param value Value to set for the msdyn_entityroutingconfigurationId property.
     */
    public set msdyn_entityroutingconfigurationId(value: Msdyn_entityroutingconfiguration | undefined) {
        this._msdyn_entityroutingconfigurationId = value;
    };
    /**
     * Gets the msdyn_fallbacklanguage property value. 
     * @returns a string
     */
    public get msdyn_fallbacklanguage() {
        return this._msdyn_fallbacklanguage;
    };
    /**
     * Sets the msdyn_fallbacklanguage property value. 
     * @param value Value to set for the msdyn_fallbacklanguage property.
     */
    public set msdyn_fallbacklanguage(value: string | undefined) {
        this._msdyn_fallbacklanguage = value;
    };
    /**
     * Gets the msdyn_followupafterwaiting property value. 
     * @returns a integer
     */
    public get msdyn_followupafterwaiting() {
        return this._msdyn_followupafterwaiting;
    };
    /**
     * Sets the msdyn_followupafterwaiting property value. 
     * @param value Value to set for the msdyn_followupafterwaiting property.
     */
    public set msdyn_followupafterwaiting(value: number | undefined) {
        this._msdyn_followupafterwaiting = value;
    };
    /**
     * Gets the msdyn_handlingtimethreshold property value. 
     * @returns a integer
     */
    public get msdyn_handlingtimethreshold() {
        return this._msdyn_handlingtimethreshold;
    };
    /**
     * Sets the msdyn_handlingtimethreshold property value. 
     * @param value Value to set for the msdyn_handlingtimethreshold property.
     */
    public set msdyn_handlingtimethreshold(value: number | undefined) {
        this._msdyn_handlingtimethreshold = value;
    };
    /**
     * Gets the msdyn_isdefault property value. 
     * @returns a boolean
     */
    public get msdyn_isdefault() {
        return this._msdyn_isdefault;
    };
    /**
     * Sets the msdyn_isdefault property value. 
     * @param value Value to set for the msdyn_isdefault property.
     */
    public set msdyn_isdefault(value: boolean | undefined) {
        this._msdyn_isdefault = value;
    };
    /**
     * Gets the msdyn_lastvalidationon property value. 
     * @returns a Date
     */
    public get msdyn_lastvalidationon() {
        return this._msdyn_lastvalidationon;
    };
    /**
     * Sets the msdyn_lastvalidationon property value. 
     * @param value Value to set for the msdyn_lastvalidationon property.
     */
    public set msdyn_lastvalidationon(value: Date | undefined) {
        this._msdyn_lastvalidationon = value;
    };
    /**
     * Gets the msdyn_lastvalidationstatus property value. 
     * @returns a string
     */
    public get msdyn_lastvalidationstatus() {
        return this._msdyn_lastvalidationstatus;
    };
    /**
     * Sets the msdyn_lastvalidationstatus property value. 
     * @param value Value to set for the msdyn_lastvalidationstatus property.
     */
    public set msdyn_lastvalidationstatus(value: string | undefined) {
        this._msdyn_lastvalidationstatus = value;
    };
    /**
     * Gets the msdyn_liveworkstream_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_liveworkstream_AsyncOperations() {
        return this._msdyn_liveworkstream_AsyncOperations;
    };
    /**
     * Sets the msdyn_liveworkstream_AsyncOperations property value. 
     * @param value Value to set for the msdyn_liveworkstream_AsyncOperations property.
     */
    public set msdyn_liveworkstream_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_liveworkstream_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_liveworkstream_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_liveworkstream_BulkDeleteFailures() {
        return this._msdyn_liveworkstream_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_liveworkstream_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_liveworkstream_BulkDeleteFailures property.
     */
    public set msdyn_liveworkstream_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_liveworkstream_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_liveworkstream_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_liveworkstream_MailboxTrackingFolders() {
        return this._msdyn_liveworkstream_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_liveworkstream_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_liveworkstream_MailboxTrackingFolders property.
     */
    public set msdyn_liveworkstream_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_liveworkstream_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile property value. 
     * @returns a msdyn_liveworkstreamcapacityprofile
     */
    public get msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile() {
        return this._msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile;
    };
    /**
     * Sets the msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile property value. 
     * @param value Value to set for the msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile property.
     */
    public set msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile(value: Msdyn_liveworkstreamcapacityprofile[] | undefined) {
        this._msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile = value;
    };
    /**
     * Gets the msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid property value. 
     * @returns a msdyn_routingconfiguration
     */
    public get msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid() {
        return this._msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid property.
     */
    public set msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid(value: Msdyn_routingconfiguration[] | undefined) {
        this._msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @returns a msdyn_rulesetdependencymapping
     */
    public get msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid() {
        return this._msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid;
    };
    /**
     * Sets the msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @param value Value to set for the msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property.
     */
    public set msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid(value: Msdyn_rulesetdependencymapping[] | undefined) {
        this._msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = value;
    };
    /**
     * Gets the msdyn_liveworkstream_ocruleitem property value. 
     * @returns a msdyn_ocruleitem
     */
    public get msdyn_liveworkstream_ocruleitem() {
        return this._msdyn_liveworkstream_ocruleitem;
    };
    /**
     * Sets the msdyn_liveworkstream_ocruleitem property value. 
     * @param value Value to set for the msdyn_liveworkstream_ocruleitem property.
     */
    public set msdyn_liveworkstream_ocruleitem(value: Msdyn_ocruleitem[] | undefined) {
        this._msdyn_liveworkstream_ocruleitem = value;
    };
    /**
     * Gets the msdyn_liveworkstream_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_liveworkstream_PrincipalObjectAttributeAccesses() {
        return this._msdyn_liveworkstream_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_liveworkstream_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_liveworkstream_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_liveworkstream_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_liveworkstream_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_liveworkstream_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_liveworkstream_ProcessSession() {
        return this._msdyn_liveworkstream_ProcessSession;
    };
    /**
     * Sets the msdyn_liveworkstream_ProcessSession property value. 
     * @param value Value to set for the msdyn_liveworkstream_ProcessSession property.
     */
    public set msdyn_liveworkstream_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_liveworkstream_ProcessSession = value;
    };
    /**
     * Gets the msdyn_liveworkstream_queueitem_liveworkstreamid property value. 
     * @returns a queueitem
     */
    public get msdyn_liveworkstream_queueitem_liveworkstreamid() {
        return this._msdyn_liveworkstream_queueitem_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstream_queueitem_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstream_queueitem_liveworkstreamid property.
     */
    public set msdyn_liveworkstream_queueitem_liveworkstreamid(value: Queueitem[] | undefined) {
        this._msdyn_liveworkstream_queueitem_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_liveworkstream_skillattachmentruleitem property value. 
     * @returns a msdyn_skillattachmentruleitem
     */
    public get msdyn_liveworkstream_skillattachmentruleitem() {
        return this._msdyn_liveworkstream_skillattachmentruleitem;
    };
    /**
     * Sets the msdyn_liveworkstream_skillattachmentruleitem property value. 
     * @param value Value to set for the msdyn_liveworkstream_skillattachmentruleitem property.
     */
    public set msdyn_liveworkstream_skillattachmentruleitem(value: Msdyn_skillattachmentruleitem[] | undefined) {
        this._msdyn_liveworkstream_skillattachmentruleitem = value;
    };
    /**
     * Gets the msdyn_liveworkstream_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_liveworkstream_SyncErrors() {
        return this._msdyn_liveworkstream_SyncErrors;
    };
    /**
     * Sets the msdyn_liveworkstream_SyncErrors property value. 
     * @param value Value to set for the msdyn_liveworkstream_SyncErrors property.
     */
    public set msdyn_liveworkstream_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_liveworkstream_SyncErrors = value;
    };
    /**
     * Gets the msdyn_liveworkstreamid property value. 
     * @returns a string
     */
    public get msdyn_liveworkstreamid() {
        return this._msdyn_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstreamid property.
     */
    public set msdyn_liveworkstreamid(value: string | undefined) {
        this._msdyn_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_masterentityroutingconfigurationId property value. 
     * @returns a msdyn_masterentityroutingconfiguration
     */
    public get msdyn_masterentityroutingconfigurationId() {
        return this._msdyn_masterentityroutingconfigurationId;
    };
    /**
     * Sets the msdyn_masterentityroutingconfigurationId property value. 
     * @param value Value to set for the msdyn_masterentityroutingconfigurationId property.
     */
    public set msdyn_masterentityroutingconfigurationId(value: Msdyn_masterentityroutingconfiguration | undefined) {
        this._msdyn_masterentityroutingconfigurationId = value;
    };
    /**
     * Gets the msdyn_matchinglogic property value. 
     * @returns a integer
     */
    public get msdyn_matchinglogic() {
        return this._msdyn_matchinglogic;
    };
    /**
     * Sets the msdyn_matchinglogic property value. 
     * @param value Value to set for the msdyn_matchinglogic property.
     */
    public set msdyn_matchinglogic(value: number | undefined) {
        this._msdyn_matchinglogic = value;
    };
    /**
     * Gets the msdyn_maxconcurrentconnection property value. 
     * @returns a integer
     */
    public get msdyn_maxconcurrentconnection() {
        return this._msdyn_maxconcurrentconnection;
    };
    /**
     * Sets the msdyn_maxconcurrentconnection property value. 
     * @param value Value to set for the msdyn_maxconcurrentconnection property.
     */
    public set msdyn_maxconcurrentconnection(value: number | undefined) {
        this._msdyn_maxconcurrentconnection = value;
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
     * Gets the msdyn_msdyn_cannedmessage_liveworkstream property value. 
     * @returns a msdyn_cannedmessage
     */
    public get msdyn_msdyn_cannedmessage_liveworkstream() {
        return this._msdyn_msdyn_cannedmessage_liveworkstream;
    };
    /**
     * Sets the msdyn_msdyn_cannedmessage_liveworkstream property value. 
     * @param value Value to set for the msdyn_msdyn_cannedmessage_liveworkstream property.
     */
    public set msdyn_msdyn_cannedmessage_liveworkstream(value: Msdyn_cannedmessage[] | undefined) {
        this._msdyn_msdyn_cannedmessage_liveworkstream = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_entityconfig property value. 
     * @returns a msdyn_entityconfig
     */
    public get msdyn_msdyn_liveworkstream_msdyn_entityconfig() {
        return this._msdyn_msdyn_liveworkstream_msdyn_entityconfig;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_entityconfig property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_entityconfig property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_entityconfig(value: Msdyn_entityconfig[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_entityconfig = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_liveconversation property value. 
     * @returns a msdyn_liveconversation
     */
    public get msdyn_msdyn_liveworkstream_msdyn_liveconversation() {
        return this._msdyn_msdyn_liveworkstream_msdyn_liveconversation;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_liveconversation property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_liveconversation property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_liveconversation(value: Msdyn_liveconversation[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_liveconversation = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid property value. 
     * @returns a msdyn_occustommessagingchannel
     */
    public get msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid(value: Msdyn_occustommessagingchannel[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_ocfbpage property value. 
     * @returns a msdyn_ocfbpage
     */
    public get msdyn_msdyn_liveworkstream_msdyn_ocfbpage() {
        return this._msdyn_msdyn_liveworkstream_msdyn_ocfbpage;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_ocfbpage property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_ocfbpage property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_ocfbpage(value: Msdyn_ocfbpage[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_ocfbpage = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid property value. 
     * @returns a msdyn_oclinechannelconfig
     */
    public get msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid(value: Msdyn_oclinechannelconfig[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid property value. 
     * @returns a msdyn_ocliveworkstreamcontextvariable
     */
    public get msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid(value: Msdyn_ocliveworkstreamcontextvariable[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid property value. 
     * @returns a msdyn_ocsmschannelsetting
     */
    public get msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid(value: Msdyn_ocsmschannelsetting[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid property value. 
     * @returns a msdyn_octeamschannelconfig
     */
    public get msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid(value: Msdyn_octeamschannelconfig[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid property value. 
     * @returns a msdyn_octwitterhandle
     */
    public get msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid(value: Msdyn_octwitterhandle[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid property value. 
     * @returns a msdyn_ocwechatchannelconfig
     */
    public get msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid(value: Msdyn_ocwechatchannelconfig[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid property value. 
     * @returns a msdyn_ocwhatsappchannelnumber
     */
    public get msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid() {
        return this._msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid(value: Msdyn_ocwhatsappchannelnumber[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_scenario property value. 
     * @returns a msdyn_scenario
     */
    public get msdyn_msdyn_liveworkstream_msdyn_scenario() {
        return this._msdyn_msdyn_liveworkstream_msdyn_scenario;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_scenario property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_scenario property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_scenario(value: Msdyn_scenario[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_scenario = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_smsnumber property value. 
     * @returns a msdyn_smsnumber
     */
    public get msdyn_msdyn_liveworkstream_msdyn_smsnumber() {
        return this._msdyn_msdyn_liveworkstream_msdyn_smsnumber;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_smsnumber property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_smsnumber property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_smsnumber(value: Msdyn_smsnumber[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_smsnumber = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_surveyquestion property value. 
     * @returns a msdyn_surveyquestion
     */
    public get msdyn_msdyn_liveworkstream_msdyn_surveyquestion() {
        return this._msdyn_msdyn_liveworkstream_msdyn_surveyquestion;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_surveyquestion property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_surveyquestion property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_surveyquestion(value: Msdyn_surveyquestion[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_surveyquestion = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream property value. 
     * @returns a msdyn_unifiedroutingrun
     */
    public get msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream() {
        return this._msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream(value: Msdyn_unifiedroutingrun[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream property value. 
     * @returns a msdyn_urnotificationtemplatemapping
     */
    public get msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream() {
        return this._msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream property.
     */
    public set msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream(value: Msdyn_urnotificationtemplatemapping[] | undefined) {
        this._msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream = value;
    };
    /**
     * Gets the msdyn_msdyn_liveworkstream_systemuser property value. 
     * @returns a systemuser
     */
    public get msdyn_msdyn_liveworkstream_systemuser() {
        return this._msdyn_msdyn_liveworkstream_systemuser;
    };
    /**
     * Sets the msdyn_msdyn_liveworkstream_systemuser property value. 
     * @param value Value to set for the msdyn_msdyn_liveworkstream_systemuser property.
     */
    public set msdyn_msdyn_liveworkstream_systemuser(value: Systemuser[] | undefined) {
        this._msdyn_msdyn_liveworkstream_systemuser = value;
    };
    /**
     * Gets the msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream property value. 
     * @returns a msdyn_ocoutboundconfiguration
     */
    public get msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream() {
        return this._msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream;
    };
    /**
     * Sets the msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream property value. 
     * @param value Value to set for the msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream property.
     */
    public set msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream(value: Msdyn_ocoutboundconfiguration[] | undefined) {
        this._msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream = value;
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
     * Gets the msdyn_notification property value. 
     * @returns a integer
     */
    public get msdyn_notification() {
        return this._msdyn_notification;
    };
    /**
     * Sets the msdyn_notification property value. 
     * @param value Value to set for the msdyn_notification property.
     */
    public set msdyn_notification(value: number | undefined) {
        this._msdyn_notification = value;
    };
    /**
     * Gets the msdyn_notificationscenarioplaceholder property value. 
     * @returns a string
     */
    public get msdyn_notificationscenarioplaceholder() {
        return this._msdyn_notificationscenarioplaceholder;
    };
    /**
     * Sets the msdyn_notificationscenarioplaceholder property value. 
     * @param value Value to set for the msdyn_notificationscenarioplaceholder property.
     */
    public set msdyn_notificationscenarioplaceholder(value: string | undefined) {
        this._msdyn_notificationscenarioplaceholder = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_consult property value. 
     * @returns a string
     */
    public get msdyn_notificationtemplate_consult() {
        return this._msdyn_notificationtemplate_consult;
    };
    /**
     * Sets the msdyn_notificationtemplate_consult property value. 
     * @param value Value to set for the msdyn_notificationtemplate_consult property.
     */
    public set msdyn_notificationtemplate_consult(value: string | undefined) {
        this._msdyn_notificationtemplate_consult = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_incoming_auth property value. 
     * @returns a string
     */
    public get msdyn_notificationtemplate_incoming_auth() {
        return this._msdyn_notificationtemplate_incoming_auth;
    };
    /**
     * Sets the msdyn_notificationtemplate_incoming_auth property value. 
     * @param value Value to set for the msdyn_notificationtemplate_incoming_auth property.
     */
    public set msdyn_notificationtemplate_incoming_auth(value: string | undefined) {
        this._msdyn_notificationtemplate_incoming_auth = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_incoming_unauth property value. 
     * @returns a string
     */
    public get msdyn_notificationtemplate_incoming_unauth() {
        return this._msdyn_notificationtemplate_incoming_unauth;
    };
    /**
     * Sets the msdyn_notificationtemplate_incoming_unauth property value. 
     * @param value Value to set for the msdyn_notificationtemplate_incoming_unauth property.
     */
    public set msdyn_notificationtemplate_incoming_unauth(value: string | undefined) {
        this._msdyn_notificationtemplate_incoming_unauth = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_supervisorassign property value. 
     * @returns a string
     */
    public get msdyn_notificationtemplate_supervisorassign() {
        return this._msdyn_notificationtemplate_supervisorassign;
    };
    /**
     * Sets the msdyn_notificationtemplate_supervisorassign property value. 
     * @param value Value to set for the msdyn_notificationtemplate_supervisorassign property.
     */
    public set msdyn_notificationtemplate_supervisorassign(value: string | undefined) {
        this._msdyn_notificationtemplate_supervisorassign = value;
    };
    /**
     * Gets the msdyn_notificationtemplate_transfer property value. 
     * @returns a string
     */
    public get msdyn_notificationtemplate_transfer() {
        return this._msdyn_notificationtemplate_transfer;
    };
    /**
     * Sets the msdyn_notificationtemplate_transfer property value. 
     * @param value Value to set for the msdyn_notificationtemplate_transfer property.
     */
    public set msdyn_notificationtemplate_transfer(value: string | undefined) {
        this._msdyn_notificationtemplate_transfer = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_ocliveworkstream property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_ocliveworkstream() {
        return this._msdyn_ocoutboundmessage_ocliveworkstream;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_ocliveworkstream property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_ocliveworkstream property.
     */
    public set msdyn_ocoutboundmessage_ocliveworkstream(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_ocliveworkstream = value;
    };
    /**
     * Gets the msdyn_outboundqueueid property value. 
     * @returns a queue
     */
    public get msdyn_outboundqueueid() {
        return this._msdyn_outboundqueueid;
    };
    /**
     * Sets the msdyn_outboundqueueid property value. 
     * @param value Value to set for the msdyn_outboundqueueid property.
     */
    public set msdyn_outboundqueueid(value: Queue | undefined) {
        this._msdyn_outboundqueueid = value;
    };
    /**
     * Gets the msdyn_recordidentificationrule property value. 
     * @returns a string
     */
    public get msdyn_recordidentificationrule() {
        return this._msdyn_recordidentificationrule;
    };
    /**
     * Sets the msdyn_recordidentificationrule property value. 
     * @param value Value to set for the msdyn_recordidentificationrule property.
     */
    public set msdyn_recordidentificationrule(value: string | undefined) {
        this._msdyn_recordidentificationrule = value;
    };
    /**
     * Gets the msdyn_recordidentificationvalidationrule property value. 
     * @returns a string
     */
    public get msdyn_recordidentificationvalidationrule() {
        return this._msdyn_recordidentificationvalidationrule;
    };
    /**
     * Sets the msdyn_recordidentificationvalidationrule property value. 
     * @param value Value to set for the msdyn_recordidentificationvalidationrule property.
     */
    public set msdyn_recordidentificationvalidationrule(value: string | undefined) {
        this._msdyn_recordidentificationvalidationrule = value;
    };
    /**
     * Gets the msdyn_routingcontractid property value. 
     * @returns a msdyn_decisioncontract
     */
    public get msdyn_routingcontractid() {
        return this._msdyn_routingcontractid;
    };
    /**
     * Sets the msdyn_routingcontractid property value. 
     * @param value Value to set for the msdyn_routingcontractid property.
     */
    public set msdyn_routingcontractid(value: Msdyn_decisioncontract | undefined) {
        this._msdyn_routingcontractid = value;
    };
    /**
     * Gets the msdyn_screenpoptimeout property value. 
     * @returns a integer
     */
    public get msdyn_screenpoptimeout() {
        return this._msdyn_screenpoptimeout;
    };
    /**
     * Sets the msdyn_screenpoptimeout property value. 
     * @param value Value to set for the msdyn_screenpoptimeout property.
     */
    public set msdyn_screenpoptimeout(value: number | undefined) {
        this._msdyn_screenpoptimeout = value;
    };
    /**
     * Gets the msdyn_screenpoptimeout_optionSet property value. 
     * @returns a integer
     */
    public get msdyn_screenpoptimeout_optionSet() {
        return this._msdyn_screenpoptimeout_optionSet;
    };
    /**
     * Sets the msdyn_screenpoptimeout_optionSet property value. 
     * @param value Value to set for the msdyn_screenpoptimeout_optionSet property.
     */
    public set msdyn_screenpoptimeout_optionSet(value: number | undefined) {
        this._msdyn_screenpoptimeout_optionSet = value;
    };
    /**
     * Gets the msdyn_sessionscenarioplaceholder property value. 
     * @returns a string
     */
    public get msdyn_sessionscenarioplaceholder() {
        return this._msdyn_sessionscenarioplaceholder;
    };
    /**
     * Sets the msdyn_sessionscenarioplaceholder property value. 
     * @param value Value to set for the msdyn_sessionscenarioplaceholder property.
     */
    public set msdyn_sessionscenarioplaceholder(value: string | undefined) {
        this._msdyn_sessionscenarioplaceholder = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_default property value. 
     * @returns a string
     */
    public get msdyn_sessiontemplate_default() {
        return this._msdyn_sessiontemplate_default;
    };
    /**
     * Sets the msdyn_sessiontemplate_default property value. 
     * @param value Value to set for the msdyn_sessiontemplate_default property.
     */
    public set msdyn_sessiontemplate_default(value: string | undefined) {
        this._msdyn_sessiontemplate_default = value;
    };
    /**
     * Gets the msdyn_skillattachmentrulescount property value. 
     * @returns a integer
     */
    public get msdyn_skillattachmentrulescount() {
        return this._msdyn_skillattachmentrulescount;
    };
    /**
     * Sets the msdyn_skillattachmentrulescount property value. 
     * @param value Value to set for the msdyn_skillattachmentrulescount property.
     */
    public set msdyn_skillattachmentrulescount(value: number | undefined) {
        this._msdyn_skillattachmentrulescount = value;
    };
    /**
     * Gets the msdyn_skillattachmentrulescount_date property value. 
     * @returns a Date
     */
    public get msdyn_skillattachmentrulescount_date() {
        return this._msdyn_skillattachmentrulescount_date;
    };
    /**
     * Sets the msdyn_skillattachmentrulescount_date property value. 
     * @param value Value to set for the msdyn_skillattachmentrulescount_date property.
     */
    public set msdyn_skillattachmentrulescount_date(value: Date | undefined) {
        this._msdyn_skillattachmentrulescount_date = value;
    };
    /**
     * Gets the msdyn_skillattachmentrulescount_state property value. 
     * @returns a integer
     */
    public get msdyn_skillattachmentrulescount_state() {
        return this._msdyn_skillattachmentrulescount_state;
    };
    /**
     * Sets the msdyn_skillattachmentrulescount_state property value. 
     * @param value Value to set for the msdyn_skillattachmentrulescount_state property.
     */
    public set msdyn_skillattachmentrulescount_state(value: number | undefined) {
        this._msdyn_skillattachmentrulescount_state = value;
    };
    /**
     * Gets the msdyn_smsprovider property value. 
     * @returns a integer
     */
    public get msdyn_smsprovider() {
        return this._msdyn_smsprovider;
    };
    /**
     * Sets the msdyn_smsprovider property value. 
     * @param value Value to set for the msdyn_smsprovider property.
     */
    public set msdyn_smsprovider(value: number | undefined) {
        this._msdyn_smsprovider = value;
    };
    /**
     * Gets the msdyn_streamsource property value. 
     * @returns a integer
     */
    public get msdyn_streamsource() {
        return this._msdyn_streamsource;
    };
    /**
     * Sets the msdyn_streamsource property value. 
     * @param value Value to set for the msdyn_streamsource property.
     */
    public set msdyn_streamsource(value: number | undefined) {
        this._msdyn_streamsource = value;
    };
    /**
     * Gets the msdyn_telesigninboundurl property value. 
     * @returns a string
     */
    public get msdyn_telesigninboundurl() {
        return this._msdyn_telesigninboundurl;
    };
    /**
     * Sets the msdyn_telesigninboundurl property value. 
     * @param value Value to set for the msdyn_telesigninboundurl property.
     */
    public set msdyn_telesigninboundurl(value: string | undefined) {
        this._msdyn_telesigninboundurl = value;
    };
    /**
     * Gets the msdyn_twilioinboundurl property value. 
     * @returns a string
     */
    public get msdyn_twilioinboundurl() {
        return this._msdyn_twilioinboundurl;
    };
    /**
     * Sets the msdyn_twilioinboundurl property value. 
     * @param value Value to set for the msdyn_twilioinboundurl property.
     */
    public set msdyn_twilioinboundurl(value: string | undefined) {
        this._msdyn_twilioinboundurl = value;
    };
    /**
     * Gets the msdyn_waitingtimethreshold property value. 
     * @returns a integer
     */
    public get msdyn_waitingtimethreshold() {
        return this._msdyn_waitingtimethreshold;
    };
    /**
     * Sets the msdyn_waitingtimethreshold property value. 
     * @param value Value to set for the msdyn_waitingtimethreshold property.
     */
    public set msdyn_waitingtimethreshold(value: number | undefined) {
        this._msdyn_waitingtimethreshold = value;
    };
    /**
     * Gets the msdyn_workdistributionmode property value. 
     * @returns a integer
     */
    public get msdyn_workdistributionmode() {
        return this._msdyn_workdistributionmode;
    };
    /**
     * Sets the msdyn_workdistributionmode property value. 
     * @param value Value to set for the msdyn_workdistributionmode property.
     */
    public set msdyn_workdistributionmode(value: number | undefined) {
        this._msdyn_workdistributionmode = value;
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
        writer.writeStringValue("_msdyn_bot_queue_value", this._msdyn_bot_queue_value);
        writer.writeStringValue("_msdyn_bot_user_value", this._msdyn_bot_user_value);
        writer.writeStringValue("_msdyn_entityroutingconfigurationid_value", this._msdyn_entityroutingconfigurationid_value);
        writer.writeStringValue("_msdyn_masterentityroutingconfigurationid_value", this._msdyn_masterentityroutingconfigurationid_value);
        writer.writeStringValue("_msdyn_outboundqueueid_value", this._msdyn_outboundqueueid_value);
        writer.writeStringValue("_msdyn_routingcontractid_value", this._msdyn_routingcontractid_value);
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
        writer.writeStringValue("msdyn_allowedpresences", this.msdyn_allowedpresences);
        writer.writeStringValue("msdyn_apikey", this.msdyn_apikey);
        writer.writeNumberValue("msdyn_apikeyversionnumber", this.msdyn_apikeyversionnumber);
        writer.writeNumberValue("msdyn_assignworkitemafterdecline", this.msdyn_assignworkitemafterdecline);
        writer.writeNumberValue("msdyn_autocloseafterinactivity", this.msdyn_autocloseafterinactivity);
        writer.writeNumberValue("msdyn_blockcapacityforwrapup", this.msdyn_blockcapacityforwrapup);
        writer.writeObjectValue<Queue>("msdyn_bot_queue", this.msdyn_bot_queue);
        writer.writeStringValue("msdyn_bot_rule", this.msdyn_bot_rule);
        writer.writeObjectValue<Systemuser>("msdyn_bot_user", this.msdyn_bot_user);
        writer.writeNumberValue("msdyn_capacityformat", this.msdyn_capacityformat);
        writer.writeNumberValue("msdyn_capacityrequired", this.msdyn_capacityrequired);
        writer.writeStringValue("msdyn_connectorsurl", this.msdyn_connectorsurl);
        writer.writeNumberValue("msdyn_conversationmode", this.msdyn_conversationmode);
        writer.writeStringValue("msdyn_customerid", this.msdyn_customerid);
        writer.writeNumberValue("msdyn_direction", this.msdyn_direction);
        writer.writeBooleanValue("msdyn_enableagentaffinity", this.msdyn_enableagentaffinity);
        writer.writeBooleanValue("msdyn_enableautomatedmessages", this.msdyn_enableautomatedmessages);
        writer.writeBooleanValue("msdyn_enableselectingfrompushbasedworkstreams", this.msdyn_enableselectingfrompushbasedworkstreams);
        writer.writeObjectValue<Msdyn_entityroutingconfiguration>("msdyn_entityroutingconfigurationId", this.msdyn_entityroutingconfigurationId);
        writer.writeStringValue("msdyn_fallbacklanguage", this.msdyn_fallbacklanguage);
        writer.writeNumberValue("msdyn_followupafterwaiting", this.msdyn_followupafterwaiting);
        writer.writeNumberValue("msdyn_handlingtimethreshold", this.msdyn_handlingtimethreshold);
        writer.writeBooleanValue("msdyn_isdefault", this.msdyn_isdefault);
        writer.writeDateValue("msdyn_lastvalidationon", this.msdyn_lastvalidationon);
        writer.writeStringValue("msdyn_lastvalidationstatus", this.msdyn_lastvalidationstatus);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_liveworkstream_AsyncOperations", this.msdyn_liveworkstream_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_liveworkstream_BulkDeleteFailures", this.msdyn_liveworkstream_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_liveworkstream_MailboxTrackingFolders", this.msdyn_liveworkstream_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_liveworkstreamcapacityprofile>("msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile", this.msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile);
        writer.writeCollectionOfObjectValues<Msdyn_routingconfiguration>("msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid", this.msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_rulesetdependencymapping>("msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid", this.msdyn_liveworkstream_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid);
        writer.writeCollectionOfObjectValues<Msdyn_ocruleitem>("msdyn_liveworkstream_ocruleitem", this.msdyn_liveworkstream_ocruleitem);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_liveworkstream_PrincipalObjectAttributeAccesses", this.msdyn_liveworkstream_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_liveworkstream_ProcessSession", this.msdyn_liveworkstream_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_liveworkstream_queueitem_liveworkstreamid", this.msdyn_liveworkstream_queueitem_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_skillattachmentruleitem>("msdyn_liveworkstream_skillattachmentruleitem", this.msdyn_liveworkstream_skillattachmentruleitem);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_liveworkstream_SyncErrors", this.msdyn_liveworkstream_SyncErrors);
        writer.writeStringValue("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeObjectValue<Msdyn_masterentityroutingconfiguration>("msdyn_masterentityroutingconfigurationId", this.msdyn_masterentityroutingconfigurationId);
        writer.writeNumberValue("msdyn_matchinglogic", this.msdyn_matchinglogic);
        writer.writeNumberValue("msdyn_maxconcurrentconnection", this.msdyn_maxconcurrentconnection);
        writer.writeNumberValue("msdyn_mode", this.msdyn_mode);
        writer.writeCollectionOfObjectValues<Msdyn_cannedmessage>("msdyn_msdyn_cannedmessage_liveworkstream", this.msdyn_msdyn_cannedmessage_liveworkstream);
        writer.writeCollectionOfObjectValues<Msdyn_entityconfig>("msdyn_msdyn_liveworkstream_msdyn_entityconfig", this.msdyn_msdyn_liveworkstream_msdyn_entityconfig);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_livechatconfig_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_liveconversation>("msdyn_msdyn_liveworkstream_msdyn_liveconversation", this.msdyn_msdyn_liveworkstream_msdyn_liveconversation);
        writer.writeCollectionOfObjectValues<Msdyn_occustommessagingchannel>("msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_occustommessagingchannel_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_ocfbpage>("msdyn_msdyn_liveworkstream_msdyn_ocfbpage", this.msdyn_msdyn_liveworkstream_msdyn_ocfbpage);
        writer.writeCollectionOfObjectValues<Msdyn_oclinechannelconfig>("msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_oclinechannelconfig_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkstreamcontextvariable>("msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsmschannelsetting>("msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_ocsmschannelsetting_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_octeamschannelconfig>("msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_octeamschannelconfig_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_octwitterhandle>("msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_octwitterhandle_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_ocwechatchannelconfig>("msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_ocwechatchannelconfig_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_ocwhatsappchannelnumber>("msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid", this.msdyn_msdyn_liveworkstream_msdyn_ocwhatsappchannelnumber_liveworkstreamid);
        writer.writeCollectionOfObjectValues<Msdyn_scenario>("msdyn_msdyn_liveworkstream_msdyn_scenario", this.msdyn_msdyn_liveworkstream_msdyn_scenario);
        writer.writeCollectionOfObjectValues<Msdyn_smsnumber>("msdyn_msdyn_liveworkstream_msdyn_smsnumber", this.msdyn_msdyn_liveworkstream_msdyn_smsnumber);
        writer.writeCollectionOfObjectValues<Msdyn_surveyquestion>("msdyn_msdyn_liveworkstream_msdyn_surveyquestion", this.msdyn_msdyn_liveworkstream_msdyn_surveyquestion);
        writer.writeCollectionOfObjectValues<Msdyn_unifiedroutingrun>("msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream", this.msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream);
        writer.writeCollectionOfObjectValues<Msdyn_urnotificationtemplatemapping>("msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream", this.msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream);
        writer.writeCollectionOfObjectValues<Systemuser>("msdyn_msdyn_liveworkstream_systemuser", this.msdyn_msdyn_liveworkstream_systemuser);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundconfiguration>("msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream", this.msdyn_msdyn_ocoutboundconfiguration_msdyn_liveworkstream);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_notification", this.msdyn_notification);
        writer.writeStringValue("msdyn_notificationscenarioplaceholder", this.msdyn_notificationscenarioplaceholder);
        writer.writeStringValue("msdyn_notificationtemplate_consult", this.msdyn_notificationtemplate_consult);
        writer.writeStringValue("msdyn_notificationtemplate_incoming_auth", this.msdyn_notificationtemplate_incoming_auth);
        writer.writeStringValue("msdyn_notificationtemplate_incoming_unauth", this.msdyn_notificationtemplate_incoming_unauth);
        writer.writeStringValue("msdyn_notificationtemplate_supervisorassign", this.msdyn_notificationtemplate_supervisorassign);
        writer.writeStringValue("msdyn_notificationtemplate_transfer", this.msdyn_notificationtemplate_transfer);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_ocliveworkstream", this.msdyn_ocoutboundmessage_ocliveworkstream);
        writer.writeObjectValue<Queue>("msdyn_outboundqueueid", this.msdyn_outboundqueueid);
        writer.writeStringValue("msdyn_recordidentificationrule", this.msdyn_recordidentificationrule);
        writer.writeStringValue("msdyn_recordidentificationvalidationrule", this.msdyn_recordidentificationvalidationrule);
        writer.writeObjectValue<Msdyn_decisioncontract>("msdyn_routingcontractid", this.msdyn_routingcontractid);
        writer.writeNumberValue("msdyn_screenpoptimeout", this.msdyn_screenpoptimeout);
        writer.writeNumberValue("msdyn_screenpoptimeout_optionSet", this.msdyn_screenpoptimeout_optionSet);
        writer.writeStringValue("msdyn_sessionscenarioplaceholder", this.msdyn_sessionscenarioplaceholder);
        writer.writeStringValue("msdyn_sessiontemplate_default", this.msdyn_sessiontemplate_default);
        writer.writeNumberValue("msdyn_skillattachmentrulescount", this.msdyn_skillattachmentrulescount);
        writer.writeDateValue("msdyn_skillattachmentrulescount_date", this.msdyn_skillattachmentrulescount_date);
        writer.writeNumberValue("msdyn_skillattachmentrulescount_state", this.msdyn_skillattachmentrulescount_state);
        writer.writeNumberValue("msdyn_smsprovider", this.msdyn_smsprovider);
        writer.writeNumberValue("msdyn_streamsource", this.msdyn_streamsource);
        writer.writeStringValue("msdyn_telesigninboundurl", this.msdyn_telesigninboundurl);
        writer.writeStringValue("msdyn_twilioinboundurl", this.msdyn_twilioinboundurl);
        writer.writeNumberValue("msdyn_waitingtimethreshold", this.msdyn_waitingtimethreshold);
        writer.writeNumberValue("msdyn_workdistributionmode", this.msdyn_workdistributionmode);
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
