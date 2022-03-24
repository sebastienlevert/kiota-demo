import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_fileresponseFromDiscriminatorValue} from './createMsfp_fileresponseFromDiscriminatorValue';
import {createMsfp_questionresponseFromDiscriminatorValue} from './createMsfp_questionresponseFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msfp_fileresponse, Msfp_questionresponse, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_question extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_survey_value?: string | undefined;
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
    private _msfp_choicetype?: number | undefined;
    private _msfp_correctanswer?: string | undefined;
    private _msfp_imageproperties?: string | undefined;
    private _msfp_maximumrating?: number | undefined;
    private _msfp_msfp_question_msfp_fileresponse_question?: Msfp_fileresponse[] | undefined;
    private _msfp_msfp_question_msfp_questionresponse_questionid?: Msfp_questionresponse[] | undefined;
    private _msfp_multiline?: boolean | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_order?: number | undefined;
    private _msfp_otherproperties?: string | undefined;
    private _msfp_permanentid?: string | undefined;
    private _msfp_question_Annotations?: Annotation[] | undefined;
    private _msfp_question_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_question_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_question_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_question_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_question_ProcessSession?: Processsession[] | undefined;
    private _msfp_question_SyncErrors?: Syncerror[] | undefined;
    private _msfp_questionchoices?: string | undefined;
    private _msfp_questionid?: string | undefined;
    private _msfp_questiontext?: string | undefined;
    private _msfp_questiontype?: number | undefined;
    private _msfp_responserequired?: boolean | undefined;
    private _msfp_sequence?: number | undefined;
    private _msfp_sourceparentquestionidentifier?: string | undefined;
    private _msfp_sourcequestionidentifier?: string | undefined;
    private _msfp_sourcesurveyidentifier?: string | undefined;
    private _msfp_subtitle?: string | undefined;
    private _msfp_Survey?: Msfp_survey | undefined;
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
     * Gets the _msfp_survey_value property value. 
     * @returns a string
     */
    public get _msfp_survey_value() {
        return this.__msfp_survey_value;
    };
    /**
     * Sets the _msfp_survey_value property value. 
     * @param value Value to set for the _msfp_survey_value property.
     */
    public set _msfp_survey_value(value: string | undefined) {
        this.__msfp_survey_value = value;
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
     * Instantiates a new msfp_question and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_question)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_question)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_question)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_question)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_survey_value": (o, n) => { (o as unknown as Msfp_question)._msfp_survey_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_question)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_question)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_question)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_question)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_question).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_question).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_question).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_question).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_question).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_question).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_question).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_choicetype": (o, n) => { (o as unknown as Msfp_question).msfp_choicetype = n.getNumberValue(); },
            "msfp_correctanswer": (o, n) => { (o as unknown as Msfp_question).msfp_correctanswer = n.getStringValue(); },
            "msfp_imageproperties": (o, n) => { (o as unknown as Msfp_question).msfp_imageproperties = n.getStringValue(); },
            "msfp_maximumrating": (o, n) => { (o as unknown as Msfp_question).msfp_maximumrating = n.getNumberValue(); },
            "msfp_msfp_question_msfp_fileresponse_question": (o, n) => { (o as unknown as Msfp_question).msfp_msfp_question_msfp_fileresponse_question = n.getCollectionOfObjectValues<Msfp_fileresponse>(createMsfp_fileresponseFromDiscriminatorValue); },
            "msfp_msfp_question_msfp_questionresponse_questionid": (o, n) => { (o as unknown as Msfp_question).msfp_msfp_question_msfp_questionresponse_questionid = n.getCollectionOfObjectValues<Msfp_questionresponse>(createMsfp_questionresponseFromDiscriminatorValue); },
            "msfp_multiline": (o, n) => { (o as unknown as Msfp_question).msfp_multiline = n.getBooleanValue(); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_question).msfp_name = n.getStringValue(); },
            "msfp_order": (o, n) => { (o as unknown as Msfp_question).msfp_order = n.getNumberValue(); },
            "msfp_otherproperties": (o, n) => { (o as unknown as Msfp_question).msfp_otherproperties = n.getStringValue(); },
            "msfp_permanentid": (o, n) => { (o as unknown as Msfp_question).msfp_permanentid = n.getStringValue(); },
            "msfp_question_Annotations": (o, n) => { (o as unknown as Msfp_question).msfp_question_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msfp_question_AsyncOperations": (o, n) => { (o as unknown as Msfp_question).msfp_question_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_question_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_question).msfp_question_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_question_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_question).msfp_question_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_question_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_question).msfp_question_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_question_ProcessSession": (o, n) => { (o as unknown as Msfp_question).msfp_question_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_question_SyncErrors": (o, n) => { (o as unknown as Msfp_question).msfp_question_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_questionchoices": (o, n) => { (o as unknown as Msfp_question).msfp_questionchoices = n.getStringValue(); },
            "msfp_questionid": (o, n) => { (o as unknown as Msfp_question).msfp_questionid = n.getStringValue(); },
            "msfp_questiontext": (o, n) => { (o as unknown as Msfp_question).msfp_questiontext = n.getStringValue(); },
            "msfp_questiontype": (o, n) => { (o as unknown as Msfp_question).msfp_questiontype = n.getNumberValue(); },
            "msfp_responserequired": (o, n) => { (o as unknown as Msfp_question).msfp_responserequired = n.getBooleanValue(); },
            "msfp_sequence": (o, n) => { (o as unknown as Msfp_question).msfp_sequence = n.getNumberValue(); },
            "msfp_sourceparentquestionidentifier": (o, n) => { (o as unknown as Msfp_question).msfp_sourceparentquestionidentifier = n.getStringValue(); },
            "msfp_sourcequestionidentifier": (o, n) => { (o as unknown as Msfp_question).msfp_sourcequestionidentifier = n.getStringValue(); },
            "msfp_sourcesurveyidentifier": (o, n) => { (o as unknown as Msfp_question).msfp_sourcesurveyidentifier = n.getStringValue(); },
            "msfp_subtitle": (o, n) => { (o as unknown as Msfp_question).msfp_subtitle = n.getStringValue(); },
            "msfp_Survey": (o, n) => { (o as unknown as Msfp_question).msfp_Survey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_question).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_question).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_question).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_question).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_question).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_question).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_question).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_question).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_question).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_question).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_choicetype property value. 
     * @returns a integer
     */
    public get msfp_choicetype() {
        return this._msfp_choicetype;
    };
    /**
     * Sets the msfp_choicetype property value. 
     * @param value Value to set for the msfp_choicetype property.
     */
    public set msfp_choicetype(value: number | undefined) {
        this._msfp_choicetype = value;
    };
    /**
     * Gets the msfp_correctanswer property value. 
     * @returns a string
     */
    public get msfp_correctanswer() {
        return this._msfp_correctanswer;
    };
    /**
     * Sets the msfp_correctanswer property value. 
     * @param value Value to set for the msfp_correctanswer property.
     */
    public set msfp_correctanswer(value: string | undefined) {
        this._msfp_correctanswer = value;
    };
    /**
     * Gets the msfp_imageproperties property value. 
     * @returns a string
     */
    public get msfp_imageproperties() {
        return this._msfp_imageproperties;
    };
    /**
     * Sets the msfp_imageproperties property value. 
     * @param value Value to set for the msfp_imageproperties property.
     */
    public set msfp_imageproperties(value: string | undefined) {
        this._msfp_imageproperties = value;
    };
    /**
     * Gets the msfp_maximumrating property value. 
     * @returns a integer
     */
    public get msfp_maximumrating() {
        return this._msfp_maximumrating;
    };
    /**
     * Sets the msfp_maximumrating property value. 
     * @param value Value to set for the msfp_maximumrating property.
     */
    public set msfp_maximumrating(value: number | undefined) {
        this._msfp_maximumrating = value;
    };
    /**
     * Gets the msfp_msfp_question_msfp_fileresponse_question property value. 
     * @returns a msfp_fileresponse
     */
    public get msfp_msfp_question_msfp_fileresponse_question() {
        return this._msfp_msfp_question_msfp_fileresponse_question;
    };
    /**
     * Sets the msfp_msfp_question_msfp_fileresponse_question property value. 
     * @param value Value to set for the msfp_msfp_question_msfp_fileresponse_question property.
     */
    public set msfp_msfp_question_msfp_fileresponse_question(value: Msfp_fileresponse[] | undefined) {
        this._msfp_msfp_question_msfp_fileresponse_question = value;
    };
    /**
     * Gets the msfp_msfp_question_msfp_questionresponse_questionid property value. 
     * @returns a msfp_questionresponse
     */
    public get msfp_msfp_question_msfp_questionresponse_questionid() {
        return this._msfp_msfp_question_msfp_questionresponse_questionid;
    };
    /**
     * Sets the msfp_msfp_question_msfp_questionresponse_questionid property value. 
     * @param value Value to set for the msfp_msfp_question_msfp_questionresponse_questionid property.
     */
    public set msfp_msfp_question_msfp_questionresponse_questionid(value: Msfp_questionresponse[] | undefined) {
        this._msfp_msfp_question_msfp_questionresponse_questionid = value;
    };
    /**
     * Gets the msfp_multiline property value. 
     * @returns a boolean
     */
    public get msfp_multiline() {
        return this._msfp_multiline;
    };
    /**
     * Sets the msfp_multiline property value. 
     * @param value Value to set for the msfp_multiline property.
     */
    public set msfp_multiline(value: boolean | undefined) {
        this._msfp_multiline = value;
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
     * Gets the msfp_order property value. 
     * @returns a int64
     */
    public get msfp_order() {
        return this._msfp_order;
    };
    /**
     * Sets the msfp_order property value. 
     * @param value Value to set for the msfp_order property.
     */
    public set msfp_order(value: number | undefined) {
        this._msfp_order = value;
    };
    /**
     * Gets the msfp_otherproperties property value. 
     * @returns a string
     */
    public get msfp_otherproperties() {
        return this._msfp_otherproperties;
    };
    /**
     * Sets the msfp_otherproperties property value. 
     * @param value Value to set for the msfp_otherproperties property.
     */
    public set msfp_otherproperties(value: string | undefined) {
        this._msfp_otherproperties = value;
    };
    /**
     * Gets the msfp_permanentid property value. 
     * @returns a string
     */
    public get msfp_permanentid() {
        return this._msfp_permanentid;
    };
    /**
     * Sets the msfp_permanentid property value. 
     * @param value Value to set for the msfp_permanentid property.
     */
    public set msfp_permanentid(value: string | undefined) {
        this._msfp_permanentid = value;
    };
    /**
     * Gets the msfp_question_Annotations property value. 
     * @returns a annotation
     */
    public get msfp_question_Annotations() {
        return this._msfp_question_Annotations;
    };
    /**
     * Sets the msfp_question_Annotations property value. 
     * @param value Value to set for the msfp_question_Annotations property.
     */
    public set msfp_question_Annotations(value: Annotation[] | undefined) {
        this._msfp_question_Annotations = value;
    };
    /**
     * Gets the msfp_question_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_question_AsyncOperations() {
        return this._msfp_question_AsyncOperations;
    };
    /**
     * Sets the msfp_question_AsyncOperations property value. 
     * @param value Value to set for the msfp_question_AsyncOperations property.
     */
    public set msfp_question_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_question_AsyncOperations = value;
    };
    /**
     * Gets the msfp_question_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_question_BulkDeleteFailures() {
        return this._msfp_question_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_question_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_question_BulkDeleteFailures property.
     */
    public set msfp_question_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_question_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_question_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_question_MailboxTrackingFolders() {
        return this._msfp_question_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_question_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_question_MailboxTrackingFolders property.
     */
    public set msfp_question_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_question_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_question_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_question_PrincipalObjectAttributeAccesses() {
        return this._msfp_question_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_question_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_question_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_question_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_question_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_question_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_question_ProcessSession() {
        return this._msfp_question_ProcessSession;
    };
    /**
     * Sets the msfp_question_ProcessSession property value. 
     * @param value Value to set for the msfp_question_ProcessSession property.
     */
    public set msfp_question_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_question_ProcessSession = value;
    };
    /**
     * Gets the msfp_question_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_question_SyncErrors() {
        return this._msfp_question_SyncErrors;
    };
    /**
     * Sets the msfp_question_SyncErrors property value. 
     * @param value Value to set for the msfp_question_SyncErrors property.
     */
    public set msfp_question_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_question_SyncErrors = value;
    };
    /**
     * Gets the msfp_questionchoices property value. 
     * @returns a string
     */
    public get msfp_questionchoices() {
        return this._msfp_questionchoices;
    };
    /**
     * Sets the msfp_questionchoices property value. 
     * @param value Value to set for the msfp_questionchoices property.
     */
    public set msfp_questionchoices(value: string | undefined) {
        this._msfp_questionchoices = value;
    };
    /**
     * Gets the msfp_questionid property value. 
     * @returns a string
     */
    public get msfp_questionid() {
        return this._msfp_questionid;
    };
    /**
     * Sets the msfp_questionid property value. 
     * @param value Value to set for the msfp_questionid property.
     */
    public set msfp_questionid(value: string | undefined) {
        this._msfp_questionid = value;
    };
    /**
     * Gets the msfp_questiontext property value. 
     * @returns a string
     */
    public get msfp_questiontext() {
        return this._msfp_questiontext;
    };
    /**
     * Sets the msfp_questiontext property value. 
     * @param value Value to set for the msfp_questiontext property.
     */
    public set msfp_questiontext(value: string | undefined) {
        this._msfp_questiontext = value;
    };
    /**
     * Gets the msfp_questiontype property value. 
     * @returns a integer
     */
    public get msfp_questiontype() {
        return this._msfp_questiontype;
    };
    /**
     * Sets the msfp_questiontype property value. 
     * @param value Value to set for the msfp_questiontype property.
     */
    public set msfp_questiontype(value: number | undefined) {
        this._msfp_questiontype = value;
    };
    /**
     * Gets the msfp_responserequired property value. 
     * @returns a boolean
     */
    public get msfp_responserequired() {
        return this._msfp_responserequired;
    };
    /**
     * Sets the msfp_responserequired property value. 
     * @param value Value to set for the msfp_responserequired property.
     */
    public set msfp_responserequired(value: boolean | undefined) {
        this._msfp_responserequired = value;
    };
    /**
     * Gets the msfp_sequence property value. 
     * @returns a integer
     */
    public get msfp_sequence() {
        return this._msfp_sequence;
    };
    /**
     * Sets the msfp_sequence property value. 
     * @param value Value to set for the msfp_sequence property.
     */
    public set msfp_sequence(value: number | undefined) {
        this._msfp_sequence = value;
    };
    /**
     * Gets the msfp_sourceparentquestionidentifier property value. 
     * @returns a string
     */
    public get msfp_sourceparentquestionidentifier() {
        return this._msfp_sourceparentquestionidentifier;
    };
    /**
     * Sets the msfp_sourceparentquestionidentifier property value. 
     * @param value Value to set for the msfp_sourceparentquestionidentifier property.
     */
    public set msfp_sourceparentquestionidentifier(value: string | undefined) {
        this._msfp_sourceparentquestionidentifier = value;
    };
    /**
     * Gets the msfp_sourcequestionidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcequestionidentifier() {
        return this._msfp_sourcequestionidentifier;
    };
    /**
     * Sets the msfp_sourcequestionidentifier property value. 
     * @param value Value to set for the msfp_sourcequestionidentifier property.
     */
    public set msfp_sourcequestionidentifier(value: string | undefined) {
        this._msfp_sourcequestionidentifier = value;
    };
    /**
     * Gets the msfp_sourcesurveyidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcesurveyidentifier() {
        return this._msfp_sourcesurveyidentifier;
    };
    /**
     * Sets the msfp_sourcesurveyidentifier property value. 
     * @param value Value to set for the msfp_sourcesurveyidentifier property.
     */
    public set msfp_sourcesurveyidentifier(value: string | undefined) {
        this._msfp_sourcesurveyidentifier = value;
    };
    /**
     * Gets the msfp_subtitle property value. 
     * @returns a string
     */
    public get msfp_subtitle() {
        return this._msfp_subtitle;
    };
    /**
     * Sets the msfp_subtitle property value. 
     * @param value Value to set for the msfp_subtitle property.
     */
    public set msfp_subtitle(value: string | undefined) {
        this._msfp_subtitle = value;
    };
    /**
     * Gets the msfp_Survey property value. 
     * @returns a msfp_survey
     */
    public get msfp_Survey() {
        return this._msfp_Survey;
    };
    /**
     * Sets the msfp_Survey property value. 
     * @param value Value to set for the msfp_Survey property.
     */
    public set msfp_Survey(value: Msfp_survey | undefined) {
        this._msfp_Survey = value;
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
        writer.writeStringValue("_msfp_survey_value", this._msfp_survey_value);
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
        writer.writeNumberValue("msfp_choicetype", this.msfp_choicetype);
        writer.writeStringValue("msfp_correctanswer", this.msfp_correctanswer);
        writer.writeStringValue("msfp_imageproperties", this.msfp_imageproperties);
        writer.writeNumberValue("msfp_maximumrating", this.msfp_maximumrating);
        writer.writeCollectionOfObjectValues<Msfp_fileresponse>("msfp_msfp_question_msfp_fileresponse_question", this.msfp_msfp_question_msfp_fileresponse_question);
        writer.writeCollectionOfObjectValues<Msfp_questionresponse>("msfp_msfp_question_msfp_questionresponse_questionid", this.msfp_msfp_question_msfp_questionresponse_questionid);
        writer.writeBooleanValue("msfp_multiline", this.msfp_multiline);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeNumberValue("msfp_order", this.msfp_order);
        writer.writeStringValue("msfp_otherproperties", this.msfp_otherproperties);
        writer.writeStringValue("msfp_permanentid", this.msfp_permanentid);
        writer.writeCollectionOfObjectValues<Annotation>("msfp_question_Annotations", this.msfp_question_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_question_AsyncOperations", this.msfp_question_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_question_BulkDeleteFailures", this.msfp_question_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_question_MailboxTrackingFolders", this.msfp_question_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_question_PrincipalObjectAttributeAccesses", this.msfp_question_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_question_ProcessSession", this.msfp_question_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_question_SyncErrors", this.msfp_question_SyncErrors);
        writer.writeStringValue("msfp_questionchoices", this.msfp_questionchoices);
        writer.writeStringValue("msfp_questionid", this.msfp_questionid);
        writer.writeStringValue("msfp_questiontext", this.msfp_questiontext);
        writer.writeNumberValue("msfp_questiontype", this.msfp_questiontype);
        writer.writeBooleanValue("msfp_responserequired", this.msfp_responserequired);
        writer.writeNumberValue("msfp_sequence", this.msfp_sequence);
        writer.writeStringValue("msfp_sourceparentquestionidentifier", this.msfp_sourceparentquestionidentifier);
        writer.writeStringValue("msfp_sourcequestionidentifier", this.msfp_sourcequestionidentifier);
        writer.writeStringValue("msfp_sourcesurveyidentifier", this.msfp_sourcesurveyidentifier);
        writer.writeStringValue("msfp_subtitle", this.msfp_subtitle);
        writer.writeObjectValue<Msfp_survey>("msfp_Survey", this.msfp_Survey);
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
