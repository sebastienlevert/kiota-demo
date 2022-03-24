import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_agentscriptactionFromDiscriminatorValue} from './createMsdyusd_agentscriptactionFromDiscriminatorValue';
import {createMsdyusd_auditanddiagnosticssettingFromDiscriminatorValue} from './createMsdyusd_auditanddiagnosticssettingFromDiscriminatorValue';
import {createMsdyusd_configurationFromDiscriminatorValue} from './createMsdyusd_configurationFromDiscriminatorValue';
import {createMsdyusd_customizationfilesFromDiscriminatorValue} from './createMsdyusd_customizationfilesFromDiscriminatorValue';
import {createMsdyusd_entitysearchFromDiscriminatorValue} from './createMsdyusd_entitysearchFromDiscriminatorValue';
import {createMsdyusd_formFromDiscriminatorValue} from './createMsdyusd_formFromDiscriminatorValue';
import {createMsdyusd_scriptletFromDiscriminatorValue} from './createMsdyusd_scriptletFromDiscriminatorValue';
import {createMsdyusd_sessioninformationFromDiscriminatorValue} from './createMsdyusd_sessioninformationFromDiscriminatorValue';
import {createMsdyusd_taskFromDiscriminatorValue} from './createMsdyusd_taskFromDiscriminatorValue';
import {createMsdyusd_toolbarstripFromDiscriminatorValue} from './createMsdyusd_toolbarstripFromDiscriminatorValue';
import {createMsdyusd_ucisettingsFromDiscriminatorValue} from './createMsdyusd_ucisettingsFromDiscriminatorValue';
import {createMsdyusd_uiieventFromDiscriminatorValue} from './createMsdyusd_uiieventFromDiscriminatorValue';
import {createMsdyusd_windowrouteFromDiscriminatorValue} from './createMsdyusd_windowrouteFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUii_hostedapplicationFromDiscriminatorValue} from './createUii_hostedapplicationFromDiscriminatorValue';
import {createUii_optionFromDiscriminatorValue} from './createUii_optionFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyusd_agentscriptaction, Msdyusd_auditanddiagnosticssetting, Msdyusd_customizationfiles, Msdyusd_entitysearch, Msdyusd_form, Msdyusd_scriptlet, Msdyusd_sessioninformation, Msdyusd_task, Msdyusd_toolbarstrip, Msdyusd_ucisettings, Msdyusd_uiievent, Msdyusd_windowroute, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Uii_hostedapplication, Uii_option} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_configuration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyusd_auditanddiagnosticssettingfield_value?: string | undefined;
    private __msdyusd_parentconfigurationid_value?: string | undefined;
    private __msdyusd_ucisettingsid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _lk_msdyusd_configuration_msdyusd_configuration?: Msdyusd_configuration[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyusd_auditanddiagnosticssettingfield?: Msdyusd_auditanddiagnosticssetting | undefined;
    private _msdyusd_clientconfigcacheversionnumber?: string | undefined;
    private _msdyusd_configuration_actioncalls?: Msdyusd_agentscriptaction[] | undefined;
    private _msdyusd_configuration_agentscript?: Msdyusd_task[] | undefined;
    private _msdyusd_configuration_Annotations?: Annotation[] | undefined;
    private _msdyusd_configuration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_configuration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_configuration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_configuration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_configuration_entitysearch?: Msdyusd_entitysearch[] | undefined;
    private _msdyusd_configuration_event?: Msdyusd_uiievent[] | undefined;
    private _msdyusd_configuration_form?: Msdyusd_form[] | undefined;
    private _msdyusd_configuration_hostedcontrol?: Uii_hostedapplication[] | undefined;
    private _msdyusd_configuration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_configuration_option?: Uii_option[] | undefined;
    private _msdyusd_configuration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_configuration_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_configuration_scriptlet?: Msdyusd_scriptlet[] | undefined;
    private _msdyusd_configuration_sessionlines?: Msdyusd_sessioninformation[] | undefined;
    private _msdyusd_configuration_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_configuration_toolbar?: Msdyusd_toolbarstrip[] | undefined;
    private _msdyusd_configuration_users?: Systemuser[] | undefined;
    private _msdyusd_configuration_windowroute?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_configurationid?: string | undefined;
    private _msdyusd_customizationfiles_configuration?: Msdyusd_customizationfiles[] | undefined;
    private _msdyusd_Description?: string | undefined;
    private _msdyusd_isdefault?: boolean | undefined;
    private _msdyusd_name?: string | undefined;
    private _msdyusd_parentconfigurationid?: Msdyusd_configuration | undefined;
    private _msdyusd_ucisettingsid?: Msdyusd_ucisettings | undefined;
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
     * Gets the _msdyusd_auditanddiagnosticssettingfield_value property value. 
     * @returns a string
     */
    public get _msdyusd_auditanddiagnosticssettingfield_value() {
        return this.__msdyusd_auditanddiagnosticssettingfield_value;
    };
    /**
     * Sets the _msdyusd_auditanddiagnosticssettingfield_value property value. 
     * @param value Value to set for the _msdyusd_auditanddiagnosticssettingfield_value property.
     */
    public set _msdyusd_auditanddiagnosticssettingfield_value(value: string | undefined) {
        this.__msdyusd_auditanddiagnosticssettingfield_value = value;
    };
    /**
     * Gets the _msdyusd_parentconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyusd_parentconfigurationid_value() {
        return this.__msdyusd_parentconfigurationid_value;
    };
    /**
     * Sets the _msdyusd_parentconfigurationid_value property value. 
     * @param value Value to set for the _msdyusd_parentconfigurationid_value property.
     */
    public set _msdyusd_parentconfigurationid_value(value: string | undefined) {
        this.__msdyusd_parentconfigurationid_value = value;
    };
    /**
     * Gets the _msdyusd_ucisettingsid_value property value. 
     * @returns a string
     */
    public get _msdyusd_ucisettingsid_value() {
        return this.__msdyusd_ucisettingsid_value;
    };
    /**
     * Sets the _msdyusd_ucisettingsid_value property value. 
     * @param value Value to set for the _msdyusd_ucisettingsid_value property.
     */
    public set _msdyusd_ucisettingsid_value(value: string | undefined) {
        this.__msdyusd_ucisettingsid_value = value;
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
     * Instantiates a new msdyusd_configuration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_configuration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_configuration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_configuration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_configuration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyusd_auditanddiagnosticssettingfield_value": (o, n) => { (o as unknown as Msdyusd_configuration)._msdyusd_auditanddiagnosticssettingfield_value = n.getStringValue(); },
            "_msdyusd_parentconfigurationid_value": (o, n) => { (o as unknown as Msdyusd_configuration)._msdyusd_parentconfigurationid_value = n.getStringValue(); },
            "_msdyusd_ucisettingsid_value": (o, n) => { (o as unknown as Msdyusd_configuration)._msdyusd_ucisettingsid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_configuration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_configuration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_configuration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_configuration)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_configuration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_configuration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_configuration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_configuration).importsequencenumber = n.getNumberValue(); },
            "lk_msdyusd_configuration_msdyusd_configuration": (o, n) => { (o as unknown as Msdyusd_configuration).lk_msdyusd_configuration_msdyusd_configuration = n.getCollectionOfObjectValues<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_configuration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_configuration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_configuration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssettingfield": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_auditanddiagnosticssettingfield = n.getObjectValue<Msdyusd_auditanddiagnosticssetting>(createMsdyusd_auditanddiagnosticssettingFromDiscriminatorValue); },
            "msdyusd_clientconfigcacheversionnumber": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_clientconfigcacheversionnumber = n.getStringValue(); },
            "msdyusd_configuration_actioncalls": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_actioncalls = n.getCollectionOfObjectValues<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_configuration_agentscript": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_agentscript = n.getCollectionOfObjectValues<Msdyusd_task>(createMsdyusd_taskFromDiscriminatorValue); },
            "msdyusd_configuration_Annotations": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyusd_configuration_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_configuration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_configuration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_configuration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_configuration_entitysearch": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_entitysearch = n.getCollectionOfObjectValues<Msdyusd_entitysearch>(createMsdyusd_entitysearchFromDiscriminatorValue); },
            "msdyusd_configuration_event": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_event = n.getCollectionOfObjectValues<Msdyusd_uiievent>(createMsdyusd_uiieventFromDiscriminatorValue); },
            "msdyusd_configuration_form": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_form = n.getCollectionOfObjectValues<Msdyusd_form>(createMsdyusd_formFromDiscriminatorValue); },
            "msdyusd_configuration_hostedcontrol": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_hostedcontrol = n.getCollectionOfObjectValues<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "msdyusd_configuration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_configuration_option": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_option = n.getCollectionOfObjectValues<Uii_option>(createUii_optionFromDiscriminatorValue); },
            "msdyusd_configuration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_configuration_ProcessSession": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_configuration_scriptlet": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_scriptlet = n.getCollectionOfObjectValues<Msdyusd_scriptlet>(createMsdyusd_scriptletFromDiscriminatorValue); },
            "msdyusd_configuration_sessionlines": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_sessionlines = n.getCollectionOfObjectValues<Msdyusd_sessioninformation>(createMsdyusd_sessioninformationFromDiscriminatorValue); },
            "msdyusd_configuration_SyncErrors": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_configuration_toolbar": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_toolbar = n.getCollectionOfObjectValues<Msdyusd_toolbarstrip>(createMsdyusd_toolbarstripFromDiscriminatorValue); },
            "msdyusd_configuration_users": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_users = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_configuration_windowroute": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configuration_windowroute = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_configurationid": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_configurationid = n.getStringValue(); },
            "msdyusd_customizationfiles_configuration": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_customizationfiles_configuration = n.getCollectionOfObjectValues<Msdyusd_customizationfiles>(createMsdyusd_customizationfilesFromDiscriminatorValue); },
            "msdyusd_Description": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_Description = n.getStringValue(); },
            "msdyusd_isdefault": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_isdefault = n.getBooleanValue(); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_name = n.getStringValue(); },
            "msdyusd_parentconfigurationid": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_parentconfigurationid = n.getObjectValue<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "msdyusd_ucisettingsid": (o, n) => { (o as unknown as Msdyusd_configuration).msdyusd_ucisettingsid = n.getObjectValue<Msdyusd_ucisettings>(createMsdyusd_ucisettingsFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_configuration).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_configuration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_configuration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_configuration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_configuration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_configuration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_configuration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_configuration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_configuration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_configuration).versionnumber = n.getNumberValue(); },
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
     * Gets the lk_msdyusd_configuration_msdyusd_configuration property value. 
     * @returns a msdyusd_configuration
     */
    public get lk_msdyusd_configuration_msdyusd_configuration() {
        return this._lk_msdyusd_configuration_msdyusd_configuration;
    };
    /**
     * Sets the lk_msdyusd_configuration_msdyusd_configuration property value. 
     * @param value Value to set for the lk_msdyusd_configuration_msdyusd_configuration property.
     */
    public set lk_msdyusd_configuration_msdyusd_configuration(value: Msdyusd_configuration[] | undefined) {
        this._lk_msdyusd_configuration_msdyusd_configuration = value;
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
     * Gets the msdyusd_auditanddiagnosticssettingfield property value. 
     * @returns a msdyusd_auditanddiagnosticssetting
     */
    public get msdyusd_auditanddiagnosticssettingfield() {
        return this._msdyusd_auditanddiagnosticssettingfield;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssettingfield property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssettingfield property.
     */
    public set msdyusd_auditanddiagnosticssettingfield(value: Msdyusd_auditanddiagnosticssetting | undefined) {
        this._msdyusd_auditanddiagnosticssettingfield = value;
    };
    /**
     * Gets the msdyusd_clientconfigcacheversionnumber property value. 
     * @returns a string
     */
    public get msdyusd_clientconfigcacheversionnumber() {
        return this._msdyusd_clientconfigcacheversionnumber;
    };
    /**
     * Sets the msdyusd_clientconfigcacheversionnumber property value. 
     * @param value Value to set for the msdyusd_clientconfigcacheversionnumber property.
     */
    public set msdyusd_clientconfigcacheversionnumber(value: string | undefined) {
        this._msdyusd_clientconfigcacheversionnumber = value;
    };
    /**
     * Gets the msdyusd_configuration_actioncalls property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_configuration_actioncalls() {
        return this._msdyusd_configuration_actioncalls;
    };
    /**
     * Sets the msdyusd_configuration_actioncalls property value. 
     * @param value Value to set for the msdyusd_configuration_actioncalls property.
     */
    public set msdyusd_configuration_actioncalls(value: Msdyusd_agentscriptaction[] | undefined) {
        this._msdyusd_configuration_actioncalls = value;
    };
    /**
     * Gets the msdyusd_configuration_agentscript property value. 
     * @returns a msdyusd_task
     */
    public get msdyusd_configuration_agentscript() {
        return this._msdyusd_configuration_agentscript;
    };
    /**
     * Sets the msdyusd_configuration_agentscript property value. 
     * @param value Value to set for the msdyusd_configuration_agentscript property.
     */
    public set msdyusd_configuration_agentscript(value: Msdyusd_task[] | undefined) {
        this._msdyusd_configuration_agentscript = value;
    };
    /**
     * Gets the msdyusd_configuration_Annotations property value. 
     * @returns a annotation
     */
    public get msdyusd_configuration_Annotations() {
        return this._msdyusd_configuration_Annotations;
    };
    /**
     * Sets the msdyusd_configuration_Annotations property value. 
     * @param value Value to set for the msdyusd_configuration_Annotations property.
     */
    public set msdyusd_configuration_Annotations(value: Annotation[] | undefined) {
        this._msdyusd_configuration_Annotations = value;
    };
    /**
     * Gets the msdyusd_configuration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_configuration_AsyncOperations() {
        return this._msdyusd_configuration_AsyncOperations;
    };
    /**
     * Sets the msdyusd_configuration_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_configuration_AsyncOperations property.
     */
    public set msdyusd_configuration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_configuration_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_configuration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_configuration_BulkDeleteFailures() {
        return this._msdyusd_configuration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_configuration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_configuration_BulkDeleteFailures property.
     */
    public set msdyusd_configuration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_configuration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_configuration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_configuration_DuplicateBaseRecord() {
        return this._msdyusd_configuration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyusd_configuration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyusd_configuration_DuplicateBaseRecord property.
     */
    public set msdyusd_configuration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_configuration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyusd_configuration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_configuration_DuplicateMatchingRecord() {
        return this._msdyusd_configuration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyusd_configuration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyusd_configuration_DuplicateMatchingRecord property.
     */
    public set msdyusd_configuration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_configuration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyusd_configuration_entitysearch property value. 
     * @returns a msdyusd_entitysearch
     */
    public get msdyusd_configuration_entitysearch() {
        return this._msdyusd_configuration_entitysearch;
    };
    /**
     * Sets the msdyusd_configuration_entitysearch property value. 
     * @param value Value to set for the msdyusd_configuration_entitysearch property.
     */
    public set msdyusd_configuration_entitysearch(value: Msdyusd_entitysearch[] | undefined) {
        this._msdyusd_configuration_entitysearch = value;
    };
    /**
     * Gets the msdyusd_configuration_event property value. 
     * @returns a msdyusd_uiievent
     */
    public get msdyusd_configuration_event() {
        return this._msdyusd_configuration_event;
    };
    /**
     * Sets the msdyusd_configuration_event property value. 
     * @param value Value to set for the msdyusd_configuration_event property.
     */
    public set msdyusd_configuration_event(value: Msdyusd_uiievent[] | undefined) {
        this._msdyusd_configuration_event = value;
    };
    /**
     * Gets the msdyusd_configuration_form property value. 
     * @returns a msdyusd_form
     */
    public get msdyusd_configuration_form() {
        return this._msdyusd_configuration_form;
    };
    /**
     * Sets the msdyusd_configuration_form property value. 
     * @param value Value to set for the msdyusd_configuration_form property.
     */
    public set msdyusd_configuration_form(value: Msdyusd_form[] | undefined) {
        this._msdyusd_configuration_form = value;
    };
    /**
     * Gets the msdyusd_configuration_hostedcontrol property value. 
     * @returns a uii_hostedapplication
     */
    public get msdyusd_configuration_hostedcontrol() {
        return this._msdyusd_configuration_hostedcontrol;
    };
    /**
     * Sets the msdyusd_configuration_hostedcontrol property value. 
     * @param value Value to set for the msdyusd_configuration_hostedcontrol property.
     */
    public set msdyusd_configuration_hostedcontrol(value: Uii_hostedapplication[] | undefined) {
        this._msdyusd_configuration_hostedcontrol = value;
    };
    /**
     * Gets the msdyusd_configuration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_configuration_MailboxTrackingFolders() {
        return this._msdyusd_configuration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_configuration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_configuration_MailboxTrackingFolders property.
     */
    public set msdyusd_configuration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_configuration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_configuration_option property value. 
     * @returns a uii_option
     */
    public get msdyusd_configuration_option() {
        return this._msdyusd_configuration_option;
    };
    /**
     * Sets the msdyusd_configuration_option property value. 
     * @param value Value to set for the msdyusd_configuration_option property.
     */
    public set msdyusd_configuration_option(value: Uii_option[] | undefined) {
        this._msdyusd_configuration_option = value;
    };
    /**
     * Gets the msdyusd_configuration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_configuration_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_configuration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_configuration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_configuration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_configuration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_configuration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_configuration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_configuration_ProcessSession() {
        return this._msdyusd_configuration_ProcessSession;
    };
    /**
     * Sets the msdyusd_configuration_ProcessSession property value. 
     * @param value Value to set for the msdyusd_configuration_ProcessSession property.
     */
    public set msdyusd_configuration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_configuration_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_configuration_scriptlet property value. 
     * @returns a msdyusd_scriptlet
     */
    public get msdyusd_configuration_scriptlet() {
        return this._msdyusd_configuration_scriptlet;
    };
    /**
     * Sets the msdyusd_configuration_scriptlet property value. 
     * @param value Value to set for the msdyusd_configuration_scriptlet property.
     */
    public set msdyusd_configuration_scriptlet(value: Msdyusd_scriptlet[] | undefined) {
        this._msdyusd_configuration_scriptlet = value;
    };
    /**
     * Gets the msdyusd_configuration_sessionlines property value. 
     * @returns a msdyusd_sessioninformation
     */
    public get msdyusd_configuration_sessionlines() {
        return this._msdyusd_configuration_sessionlines;
    };
    /**
     * Sets the msdyusd_configuration_sessionlines property value. 
     * @param value Value to set for the msdyusd_configuration_sessionlines property.
     */
    public set msdyusd_configuration_sessionlines(value: Msdyusd_sessioninformation[] | undefined) {
        this._msdyusd_configuration_sessionlines = value;
    };
    /**
     * Gets the msdyusd_configuration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_configuration_SyncErrors() {
        return this._msdyusd_configuration_SyncErrors;
    };
    /**
     * Sets the msdyusd_configuration_SyncErrors property value. 
     * @param value Value to set for the msdyusd_configuration_SyncErrors property.
     */
    public set msdyusd_configuration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_configuration_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_configuration_toolbar property value. 
     * @returns a msdyusd_toolbarstrip
     */
    public get msdyusd_configuration_toolbar() {
        return this._msdyusd_configuration_toolbar;
    };
    /**
     * Sets the msdyusd_configuration_toolbar property value. 
     * @param value Value to set for the msdyusd_configuration_toolbar property.
     */
    public set msdyusd_configuration_toolbar(value: Msdyusd_toolbarstrip[] | undefined) {
        this._msdyusd_configuration_toolbar = value;
    };
    /**
     * Gets the msdyusd_configuration_users property value. 
     * @returns a systemuser
     */
    public get msdyusd_configuration_users() {
        return this._msdyusd_configuration_users;
    };
    /**
     * Sets the msdyusd_configuration_users property value. 
     * @param value Value to set for the msdyusd_configuration_users property.
     */
    public set msdyusd_configuration_users(value: Systemuser[] | undefined) {
        this._msdyusd_configuration_users = value;
    };
    /**
     * Gets the msdyusd_configuration_windowroute property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_configuration_windowroute() {
        return this._msdyusd_configuration_windowroute;
    };
    /**
     * Sets the msdyusd_configuration_windowroute property value. 
     * @param value Value to set for the msdyusd_configuration_windowroute property.
     */
    public set msdyusd_configuration_windowroute(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_configuration_windowroute = value;
    };
    /**
     * Gets the msdyusd_configurationid property value. 
     * @returns a string
     */
    public get msdyusd_configurationid() {
        return this._msdyusd_configurationid;
    };
    /**
     * Sets the msdyusd_configurationid property value. 
     * @param value Value to set for the msdyusd_configurationid property.
     */
    public set msdyusd_configurationid(value: string | undefined) {
        this._msdyusd_configurationid = value;
    };
    /**
     * Gets the msdyusd_customizationfiles_configuration property value. 
     * @returns a msdyusd_customizationfiles
     */
    public get msdyusd_customizationfiles_configuration() {
        return this._msdyusd_customizationfiles_configuration;
    };
    /**
     * Sets the msdyusd_customizationfiles_configuration property value. 
     * @param value Value to set for the msdyusd_customizationfiles_configuration property.
     */
    public set msdyusd_customizationfiles_configuration(value: Msdyusd_customizationfiles[] | undefined) {
        this._msdyusd_customizationfiles_configuration = value;
    };
    /**
     * Gets the msdyusd_Description property value. 
     * @returns a string
     */
    public get msdyusd_Description() {
        return this._msdyusd_Description;
    };
    /**
     * Sets the msdyusd_Description property value. 
     * @param value Value to set for the msdyusd_Description property.
     */
    public set msdyusd_Description(value: string | undefined) {
        this._msdyusd_Description = value;
    };
    /**
     * Gets the msdyusd_isdefault property value. 
     * @returns a boolean
     */
    public get msdyusd_isdefault() {
        return this._msdyusd_isdefault;
    };
    /**
     * Sets the msdyusd_isdefault property value. 
     * @param value Value to set for the msdyusd_isdefault property.
     */
    public set msdyusd_isdefault(value: boolean | undefined) {
        this._msdyusd_isdefault = value;
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
     * Gets the msdyusd_parentconfigurationid property value. 
     * @returns a msdyusd_configuration
     */
    public get msdyusd_parentconfigurationid() {
        return this._msdyusd_parentconfigurationid;
    };
    /**
     * Sets the msdyusd_parentconfigurationid property value. 
     * @param value Value to set for the msdyusd_parentconfigurationid property.
     */
    public set msdyusd_parentconfigurationid(value: Msdyusd_configuration | undefined) {
        this._msdyusd_parentconfigurationid = value;
    };
    /**
     * Gets the msdyusd_ucisettingsid property value. 
     * @returns a msdyusd_ucisettings
     */
    public get msdyusd_ucisettingsid() {
        return this._msdyusd_ucisettingsid;
    };
    /**
     * Sets the msdyusd_ucisettingsid property value. 
     * @param value Value to set for the msdyusd_ucisettingsid property.
     */
    public set msdyusd_ucisettingsid(value: Msdyusd_ucisettings | undefined) {
        this._msdyusd_ucisettingsid = value;
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
        writer.writeStringValue("_msdyusd_auditanddiagnosticssettingfield_value", this._msdyusd_auditanddiagnosticssettingfield_value);
        writer.writeStringValue("_msdyusd_parentconfigurationid_value", this._msdyusd_parentconfigurationid_value);
        writer.writeStringValue("_msdyusd_ucisettingsid_value", this._msdyusd_ucisettingsid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Msdyusd_configuration>("lk_msdyusd_configuration_msdyusd_configuration", this.lk_msdyusd_configuration_msdyusd_configuration);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyusd_auditanddiagnosticssetting>("msdyusd_auditanddiagnosticssettingfield", this.msdyusd_auditanddiagnosticssettingfield);
        writer.writeStringValue("msdyusd_clientconfigcacheversionnumber", this.msdyusd_clientconfigcacheversionnumber);
        writer.writeCollectionOfObjectValues<Msdyusd_agentscriptaction>("msdyusd_configuration_actioncalls", this.msdyusd_configuration_actioncalls);
        writer.writeCollectionOfObjectValues<Msdyusd_task>("msdyusd_configuration_agentscript", this.msdyusd_configuration_agentscript);
        writer.writeCollectionOfObjectValues<Annotation>("msdyusd_configuration_Annotations", this.msdyusd_configuration_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_configuration_AsyncOperations", this.msdyusd_configuration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_configuration_BulkDeleteFailures", this.msdyusd_configuration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_configuration_DuplicateBaseRecord", this.msdyusd_configuration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_configuration_DuplicateMatchingRecord", this.msdyusd_configuration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Msdyusd_entitysearch>("msdyusd_configuration_entitysearch", this.msdyusd_configuration_entitysearch);
        writer.writeCollectionOfObjectValues<Msdyusd_uiievent>("msdyusd_configuration_event", this.msdyusd_configuration_event);
        writer.writeCollectionOfObjectValues<Msdyusd_form>("msdyusd_configuration_form", this.msdyusd_configuration_form);
        writer.writeCollectionOfObjectValues<Uii_hostedapplication>("msdyusd_configuration_hostedcontrol", this.msdyusd_configuration_hostedcontrol);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_configuration_MailboxTrackingFolders", this.msdyusd_configuration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Uii_option>("msdyusd_configuration_option", this.msdyusd_configuration_option);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_configuration_PrincipalObjectAttributeAccesses", this.msdyusd_configuration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_configuration_ProcessSession", this.msdyusd_configuration_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyusd_scriptlet>("msdyusd_configuration_scriptlet", this.msdyusd_configuration_scriptlet);
        writer.writeCollectionOfObjectValues<Msdyusd_sessioninformation>("msdyusd_configuration_sessionlines", this.msdyusd_configuration_sessionlines);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_configuration_SyncErrors", this.msdyusd_configuration_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyusd_toolbarstrip>("msdyusd_configuration_toolbar", this.msdyusd_configuration_toolbar);
        writer.writeCollectionOfObjectValues<Systemuser>("msdyusd_configuration_users", this.msdyusd_configuration_users);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_configuration_windowroute", this.msdyusd_configuration_windowroute);
        writer.writeStringValue("msdyusd_configurationid", this.msdyusd_configurationid);
        writer.writeCollectionOfObjectValues<Msdyusd_customizationfiles>("msdyusd_customizationfiles_configuration", this.msdyusd_customizationfiles_configuration);
        writer.writeStringValue("msdyusd_Description", this.msdyusd_Description);
        writer.writeBooleanValue("msdyusd_isdefault", this.msdyusd_isdefault);
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
        writer.writeObjectValue<Msdyusd_configuration>("msdyusd_parentconfigurationid", this.msdyusd_parentconfigurationid);
        writer.writeObjectValue<Msdyusd_ucisettings>("msdyusd_ucisettingsid", this.msdyusd_ucisettingsid);
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
